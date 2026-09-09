const express = require('express');
const router = express.Router();
const Testimonial = require('../models/Testimonial');
const { isMongoConnected, getLocalStore, saveLocalStore } = require('../config/db');

// GET /api/testimonials
router.get('/', async (req, res) => {
  try {
    if (isMongoConnected()) {
      const testimonials = await Testimonial.find({ isActive: true }).sort({ createdAt: -1 });
      return res.json(testimonials);
    }

    const store = getLocalStore();
    const testimonials = (store.testimonials || []).filter(t => t.isActive !== false);
    return res.json(testimonials);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch testimonials' });
  }
});

// POST /api/testimonials
router.post('/', async (req, res) => {
  try {
    if (isMongoConnected()) {
      const testimonial = new Testimonial(req.body);
      await testimonial.save();
      return res.status(201).json(testimonial);
    }

    const store = getLocalStore();
    const newTestimonial = {
      _id: 'test_' + Date.now(),
      createdAt: new Date().toISOString(),
      ...req.body
    };
    store.testimonials = [newTestimonial, ...(store.testimonials || [])];
    saveLocalStore(store);
    return res.status(201).json(newTestimonial);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create testimonial' });
  }
});

module.exports = router;
