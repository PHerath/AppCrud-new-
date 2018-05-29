const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Item } = require('../models/item');

router.get('/', (req, res) => {
   Item.find((err, docs) => {
      if(!err){
         res.send(docs);
      }
      else{
         console.log('Error in Retriving Items :' + JSON.stringify(err, undefined, 2));
      }
   });
});

router.get('/:item_id', (req, res) => {
   if(!ObjectId.isValid(req.params.item_id)){
      return res.status(400).send('No record with given id : ${req.params.item_id} ');
   }
   Item.findById(req.params.item_id, (err, docs) =>{
      if(!err){
         res.send(docs);
      }
      else{
         console.log('Error in Retriving Items By ID :' + JSON.stringify(err, undefined, 2));
      }
   });
});

router.post('/', (req, res) => {
   var item = new Item({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
   });
   item.save((err, docs) => {
      if(!err){
         res.send(docs);
      }
      else{
         console.log('Error in Saving Items :' + JSON.stringify(err, undefined, 2));
      }
   })
});

module.exports = router;