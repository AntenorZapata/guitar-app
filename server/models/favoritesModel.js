const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema(
  {

    createdAt: {
      type: Date,
      default: Date.now(),
    },
    brand: {
      type: String,
      required: [true, 'A favorite must have a brand'],
    },
    model: {
      type: String,
      required: [true, 'A favorite must have a model'],
      maxlength: [40, 'A favorite model must have less or equal 40 characters'],
    },
    year: {
      type: Number,
      required: [true, 'A guitar must have a year'],
    },
    imageCover: {
      type: String,
      required: [true, 'A favorite must have a image'],
    },
    guitar: {
      type: mongoose.Schema.ObjectId,
      ref: 'Guitar',
      required: [true, 'Favorite must belong to a guitar'],
    },
    user: {
      type: String,
      required: [true, 'Favorite must belong to a user'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

// favoriteSchema.pre(/^find/, function (next) {
//   this.populate({
//     path: 'user',
//     select: 'email',
//   });

//   next();
// });

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;
