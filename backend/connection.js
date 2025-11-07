const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/Rangila_Resto')
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));
