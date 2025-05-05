const controller = require('../controllers/bookController').BookController;
const express = require('express');
module.exports  = express.Router()
   .get('/', (req, res) => controller.getAll(req, res))
   .get('/:id', (req, res) => controller.getOne(req, res))
   .post('/', (req, res) => controller.create(req, res))
   .put('/:id', (req, res) => controller.update(req, res))
   .delete('/:id', (req, res) => controller.remove(req, res))


