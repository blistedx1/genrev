const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, default: '' },
  email: { type: String, required: true },
  company: { type: String, default: '' },
  service: { type: String, default: 'Interior Design' },
  budget: { type: String, default: '₹25L - ₹50L' },
  message: { type: String, required: true },
  status: { type: String, enum: ['New', 'Contacted', 'In Progress', 'Archived'], default: 'New' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Contact', ContactSchema);
