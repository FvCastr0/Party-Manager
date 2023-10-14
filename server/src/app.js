const express = require('express');
const cors = require('cors');
const serviceRoutes = require('./routes/service');
const partyRoutes = require('./routes/party');
const Database = require('./db/database');

const db = new Database();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
    db.connectionDB();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use('/service', serviceRoutes);
    this.app.use('/party', partyRoutes);
  }
}

module.exports = new App();
