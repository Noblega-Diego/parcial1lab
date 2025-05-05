const controller = require('../controllers/AuthorController').AuthorController
const express = require('express');
module.exports  = express.Router()
   .get('/', (req, res) =>{
      console.log('get all') 
      return controller.getAll(req, res)})
   .get('/:id', (req, res) => controller.getOne(req, res))
   .post('/', (req, res) => controller.create(req, res))
   .put('/:id', (req, res) => controller.update(req, res))
   .delete('/:id', (req, res) => controller.remove(req, res))
