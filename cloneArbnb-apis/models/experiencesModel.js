const mongoose = require('mongoose')
const { Schema } = mongoose;

const ExperienceSchema = new Schema({
    title: String,
    image: String,
    description: String,
    place: String,
    score: Number,
    users: Number
  });

  const ExperienceModel = mongoose.model('experiences', ExperienceSchema);

  module.exports = ExperienceModel;