const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }, // Store the image URL or path
});

module.exports = mongoose.model("Project", projectSchema);
