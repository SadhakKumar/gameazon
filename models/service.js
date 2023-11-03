const mongoose = require('mongoose');

// Define a schema for the services
const serviceSchema = new mongoose.Schema({
  photographerName: {
    type: String,
    required: true,
  },
  imageUrls: {
    type: [String], // You can store multiple image URLs as an array
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

// Create a model from the schema
const Service = mongoose.models.services || mongoose.model('services', serviceSchema);

export default Service;
