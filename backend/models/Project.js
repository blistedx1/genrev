const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  category: { 
    type: String, 
    enum: ['Residential', 'Commercial', 'Hospitality', 'Turnkey Interiors', 'Architecture'], 
    required: true 
  },
  description: { type: String, required: true },
  detailedText: { type: String, default: '' },
  images: [{ type: String }],
  location: { type: String, default: 'Pan India / Global' },
  year: { type: Number, default: 2026 },
  area: { type: String, default: '4,500 sq.ft' },
  featured: { type: Boolean, default: false },
  stats: {
    duration: { type: String, default: '14 Months' },
    style: { type: String, default: 'Contemporary Minimalist' },
    clientType: { type: String, default: 'Private Bespoke' }
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', ProjectSchema);
