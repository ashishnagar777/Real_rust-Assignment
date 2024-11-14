const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  }, // Store the image URL or path
  designation: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('client', clientSchema);
