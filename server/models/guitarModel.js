const mongoose = require('mongoose');

const guitarSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: [true, 'A guitar must have a brand'],
  },
  model: {
    type: String,
    required: [true, 'A guitar must have a model'],
    maxlength: [40, 'A guitar model must have less or equal 40 characters'],
  },
  year: {
    type: Number,
    required: [true, 'A guitar must have a year'],
  },
  summary: {
    type: String,
    required: [true, 'A guitar must have a summary'],
  },
  description: {
    type: String,
    required: [true, 'A guitar must have a description'],
  },
  player: {
    type: String,
    required: [true, 'A guitar must have a player'],
  },
  songs: {
    type: [String],
    required: [true, 'A guitar must have a song'],
  },
  price: {
    type: Number,
    required: [true, 'A guitar must have a price'],
  },
  country: {
    type: String,
    required: [true, 'A guitar must have a country'],
  },
  imageCover: {
    type: String,
    required: [true, 'A guitar must have a image'],
  },
  images: [String],
  createdAt: {
    type: Date,
    default: new Date(),
  },
  link: {
    type: String,
    required: [true, 'A guitar must have a link'],
  },
  tags: [String],
  likeCount: {
    type: Number,
    default: 0,
  },
});

const Guitar = mongoose.model('Guitar', guitarSchema);

module.exports = Guitar;
