require('dotenv').config();
const mongoose = require('mongoose');
const { connectDB, isMongoConnected, saveLocalStore } = require('../config/db');
const Project = require('../models/Project');
const Testimonial = require('../models/Testimonial');
const { seedProjects, seedTestimonials, seedClients } = require('../data/seedData');

async function runSeed() {
  console.log('[Seed] Starting database seeding for Genrev Interio...');
  await connectDB();

  if (isMongoConnected()) {
    try {
      await Project.deleteMany({});
      await Testimonial.deleteMany({});
      
      await Project.insertMany(seedProjects);
      await Testimonial.insertMany(seedTestimonials);
      console.log(`[Seed] Successfully seeded ${seedProjects.length} projects and ${seedTestimonials.length} testimonials into MongoDB.`);
    } catch (err) {
      console.error('[Seed] MongoDB seed error:', err);
    } finally {
      mongoose.connection.close();
    }
  } else {
    // Seed local JSON store
    const projectsWithId = seedProjects.map((p, idx) => ({
      _id: `proj_${idx + 1}`,
      createdAt: new Date(Date.now() - idx * 86400000).toISOString(),
      ...p
    }));

    const testimonialsWithId = seedTestimonials.map((t, idx) => ({
      _id: `test_${idx + 1}`,
      createdAt: new Date(Date.now() - idx * 86400000).toISOString(),
      ...t
    }));

    saveLocalStore({
      projects: projectsWithId,
      testimonials: testimonialsWithId,
      clients: seedClients,
      contacts: []
    });

    console.log(`[Seed] Seeded ${projectsWithId.length} projects & ${testimonialsWithId.length} testimonials to local storage.`);
  }
}

runSeed().then(() => {
  console.log('[Seed] Seeding completed.');
  process.exit(0);
}).catch(err => {
  console.error('[Seed] Fatal error:', err);
  process.exit(1);
});
