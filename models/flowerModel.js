const { Schema, model } = require('mongoose');

const flowerModel = new Schema({
  name: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: false,
  },
  discount: {
    type: Boolean,
    required: false,
  },
  img: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    required: false,
    default: Date.now,
  },
  sale: {
    type: Number,
    required: false,
  },
  sale: {
    type: String,
    required: false,
  },
});

module.exports = model('Flowers', flowerModel);
