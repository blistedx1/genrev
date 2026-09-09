require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectDB, getLocalStore, saveLocalStore } = require('./config/db');
const { seedProjects, seedTestimonials, seedClients } = require('./data/seedData');

const projectsRouter = require('./routes/projects');
const testimonialsRouter = require('./routes/testimonials');
const contactsRouter = require('./routes/contacts');
const clientsRouter = require('./routes/clients');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize seed data if local store is empty
function ensureInitialData() {
  const store = getLocalStore();
  let updated = false;

  if (!store.projects || store.projects.length === 0) {
    store.projects = seedProjects.map((p, idx) => ({
      _id: `proj_${idx + 1}`,
      createdAt: new Date(Date.now() - idx * 86400000).toISOString(),
      ...p
    }));
    updated = true;
  }

  if (!store.testimonials || store.testimonials.length === 0) {
    store.testimonials = seedTestimonials.map((t, idx) => ({
      _id: `test_${idx + 1}`,
      createdAt: new Date(Date.now() - idx * 86400000).toISOString(),
      ...t
    }));
    updated = true;
  }

  if (!store.clients || store.clients.length === 0) {
    store.clients = seedClients;
    updated = true;
  }

  if (!store.contacts) {
    store.contacts = [];
    updated = true;
  }

  if (updated) {
    saveLocalStore(store);
    console.log('[Store] Initialized local fallback store with curated luxury architectural data.');
  }
}

// Routes
app.use('/api/projects', projectsRouter);
app.use('/api/testimonials', testimonialsRouter);
app.use('/api/contacts', contactsRouter);
app.use('/api/contact', contactsRouter); // Allow POST /api/contact as requested
app.use('/api/clients', clientsRouter);

// Admin Authentication Route
app.post('/api/admin/login', (req, res) => {
  const { userId, passcode } = req.body;
  if (userId === 'admin@gen' && passcode === 'interio@gen') {
    return res.json({ 
      success: true, 
      message: 'Authentication successful', 
      user: { id: 'admin@gen', role: 'Super Administrator' },
      token: 'genrev_auth_' + Date.now() 
    });
  }
  return res.status(401).json({ success: false, error: 'Invalid User ID or Passcode' });
});

// Health check & branding info
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    brand: 'Genrev Interio Pvt Ltd',
    tagline: 'Where Vision Meets Craftsmanship',
    timestamp: new Date().toISOString()
  });
});

// Connect to DB and start server if run directly
connectDB().then(() => {
  ensureInitialData();
  if (process.env.VERCEL !== '1' && !process.env.AWS_LAMBDA_FUNCTION_NAME) {
    app.listen(PORT, () => {
      console.log(`[Genrev Interio API] Server running on http://localhost:${PORT}`);
    });
  }
});

module.exports = app;
