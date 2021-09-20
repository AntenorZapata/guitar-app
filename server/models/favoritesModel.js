const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema(
  {

    createdAt: {
      type: Date,
      default: Date.now(),
    },
    guitar: {
      type: mongoose.Schema.ObjectId,
      ref: 'Guitar',
      required: [true, 'Favorite must belong to a guitar'],
    },
    user: {
      type: String,
      ref: 'User',
      required: [true, 'Favorite must belong to a user'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

favoriteSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'user',
    select: 'email',
  });

  next();
});

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;
