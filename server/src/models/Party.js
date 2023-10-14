const mongoose = require('mongoose');
const { serviceSchema } = require('./Service');

const { Schema } = mongoose;

const partySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
  services: {
    type: [serviceSchema],
  },
  image: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Party = mongoose.model('Party', partySchema);

module.exports = { Party, partySchema };
