const mongoose = require('mongoose');

var Item = mongoose.model('Item', {
   id: { type: String },
   name: { type:String },
   description: { type:String },
   price: { type:Number }
});

module.exports = { Item };