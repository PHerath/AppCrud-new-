const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cruddb',(err) => {
   if(!err){
      console.log('MongoDB connection succeeded.....')
   }
   else{
      console.log('mongoDB connection failed..!: ' + JSON.stringify(err, undefined, 2))
   }
});

module.exports = mongoose;