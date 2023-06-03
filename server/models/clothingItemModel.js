const mongoose = require("mongoose");

const ClothingItemSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    size: String,
    color: String,
    createdAt: { type: Date, default: Date.now }
  });

module.exports = mongoose.model('ClothingItem', ClothingItemSchema);