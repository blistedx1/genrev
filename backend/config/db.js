const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '..', 'data', 'store.json');

// Ensure data directory exists
const dataDir = path.dirname(dataFilePath);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

let isMongoConnected = false;

async function connectDB() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    isMongoConnected = false;
    console.log(`[Database] No MONGODB_URI configured. Running with embedded persistent store at ${dataFilePath}`);
    return;
  }

  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 4000,
    });
    isMongoConnected = true;
    console.log(`[Database] MongoDB Connected successfully to ${uri.split('@')[1] || 'database'}`);
  } catch (err) {
    isMongoConnected = false;
    console.warn(`[Database] MongoDB connection error (${err.message}). Falling back to local store.`);
  }
}

function getLocalStore() {
  if (!fs.existsSync(dataFilePath)) {
    return { projects: [], testimonials: [], clients: [], contacts: [] };
  }
  try {
    const raw = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(raw);
  } catch (e) {
    return { projects: [], testimonials: [], clients: [], contacts: [] };
  }
}

function saveLocalStore(data) {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
}

module.exports = {
  connectDB,
  isMongoConnected: () => isMongoConnected,
  getLocalStore,
  saveLocalStore
};
