const mongoose = require('mongoose');
const { isAbsolute } = require('path');
require('../connection');

const itemsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    isAvailable: { type: Boolean, required: true, default: false },
});

const MenuItems = mongoose.model('MenuItems', itemsSchema);

module.exports = MenuItems;