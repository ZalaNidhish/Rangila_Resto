const mongoose = require('mongoose');
require('../connection');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    isLoggedin: { type: Boolean, default: false }
});

const User = mongoose.model('User', userSchema);
module.exports = User;