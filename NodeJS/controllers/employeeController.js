const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Employee } = require('../models/employee');

// retrive all employees from database............................ 
router.get('/', (req, res) => {
   Employee.find((err, docs) => {
      if(!err){
         res.send(docs);
      }
      else{
         console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2));
      }
   });
});

// retrive emplyee data for perticular id from database.............................................
router.get('/:id', (req, res) => {
   if(!ObjectId.isValid(req.params.id)){
      return res.status(400).send('No record with given id : ${req.params.id} ');
   }
   Employee.findById(req.params.id, (err, docs) =>{
      if(!err){
         res.send(docs);
      }
      else{
         console.log('Error in Retriving Employees By ID :' + JSON.stringify(err, undefined, 2));
      }
   });
});

// insert the new employee to database.....................................
router.post('/', (req, res) => {
   var emp = new Employee({
      name: req.body.name,
      position: req.body.position,
      office: req.body.office,
      salary: req.body.salary
   });
   emp.save((err, docs) => {
      if(!err){
         res.send(docs);
      }
      else{
         console.log('Error in Saving Employees :' + JSON.stringify(err, undefined, 2));
      }
   })
});

// update emplyee is in database..............................................
router.put('/:id', (req, res) => {
   if(!ObjectId.isValid(req.params.id)){
      return res.status(400).send('No record with given id : ${req.params.id} ');
   }
   var emp = {
      name: req.body.name,
      position: req.body.position,
      office: req.body.office,
      salary: req.body.salary
   }
   Employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, ( err, docs ) => {
      if(!err){
         res.send(docs);
      }
      else{
         console.log('Error in Updating Employees :' + JSON.stringify(err, undefined, 2));
      }
   });
});

router.delete('/:id', (req, res) => {
   if(!ObjectId.isValid(req.params.id)){
      return res.status(400).send('No record with given id : ${req.params.id} ');
   }
   Employee.findByIdAndRemove(req.params.id, (err, docs) =>{
      if(!err){
         res.send(docs);
      }
      else{
         console.log('Error in Deleting Employees :' + JSON.stringify(err, undefined, 2));
      }
   })
})




module.exports = router;