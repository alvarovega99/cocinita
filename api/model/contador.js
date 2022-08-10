const { Schema, model } = require('mongoose');

const counter = new Schema(
  {
    views: { type: Number },
  },
);

module.exports = model('counter', counter);