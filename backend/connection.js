const mongoose = require('mongoose');
require("dotenv").config();
const MongoURL = process.env.MongoURL;

mongoose.connect(MongoURL)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));
