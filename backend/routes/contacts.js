const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const { isMongoConnected, getLocalStore, saveLocalStore } = require('../config/db');

// GET /api/contacts - for admin inspection
router.get('/', async (req, res) => {
  try {
    if (isMongoConnected()) {
      const contacts = await Contact.find().sort({ createdAt: -1 });
      return res.json(contacts);
    }

    const store = getLocalStore();
    return res.json(store.contacts || []);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve contacts' });
  }
});

// POST /api/contact - user submission
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, company, service, budget, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    const entry = {
      name,
      email,
      phone: phone || '',
      company: company || '',
      service: service || 'Interior Architecture',
      budget: budget || '₹25L - ₹50L',
      message,
      status: 'New'
    };

    if (isMongoConnected()) {
      const newContact = new Contact(entry);
      await newContact.save();
      return res.status(201).json({ success: true, message: 'Message received by Genrev Interio', data: newContact });
    }

    const store = getLocalStore();
    const newContact = {
      _id: 'inq_' + Date.now(),
      createdAt: new Date().toISOString(),
      ...entry
    };
    store.contacts = [newContact, ...(store.contacts || [])];
    saveLocalStore(store);

    console.log(`[Inquiry Received] From: ${name} (${email}) - Message: ${message.substring(0, 40)}...`);
    return res.status(201).json({ success: true, message: 'Message received by Genrev Interio', data: newContact });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// PATCH /api/contacts/:id/status
router.patch('/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (isMongoConnected()) {
      const updated = await Contact.findByIdAndUpdate(id, { status }, { new: true });
      return res.json(updated);
    }

    const store = getLocalStore();
    const contact = (store.contacts || []).find(c => c._id === id);
    if (contact) {
      contact.status = status;
      saveLocalStore(store);
      return res.json(contact);
    }
    return res.status(404).json({ error: 'Contact inquiry not found' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update contact status' });
  }
});

module.exports = router;
