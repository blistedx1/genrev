const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema({
  clientName: { type: String, required: true },
  role: { type: String, default: 'Homeowner' },
  company: { type: String, default: '' },
  clientPhoto: { type: String, default: '' },
  quote: { type: String, required: true },
  projectType: { type: String, default: 'Luxury Residence' },
  rating: { type: Number, default: 5 },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Testimonial', TestimonialSchema);
