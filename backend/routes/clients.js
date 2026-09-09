const express = require('express');
const router = express.Router();
const { isMongoConnected, getLocalStore } = require('../config/db');
const { seedClients } = require('../data/seedData');

router.get('/', (req, res) => {
  const store = getLocalStore();
  const clients = (store.clients && store.clients.length > 0) ? store.clients : seedClients;
  res.json(clients);
});

module.exports = router;
