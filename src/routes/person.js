'use strict';

const express = require('express');
const PersonModel = require('../models/person.js')
const Person = require('../models/person.js')
const items = new Person();

const router = express.Router();

// routes
router.get('/person', getPerson);
router.get('/person/:id', getOnePerson);
router.post('/person', createPerson);
router.put('/person/:id', updatePerson);
router.delete('/person:id', deletePerson);

function getPerson(req, res) {
  let all = items.get();
  res.status(200).json(all);
}

function getOnePerson(req, res) {
  let id = parseInt(req.params.id);
  let item = items.get(id);
  res.status(200).json(item);
}

function createPerson(req, res) {
  let obj = req.body;
  let newPerson = items.create(obj);
  res.status(201).json(newPerson);
}

function updatePerson(req, res) {
  let id = parseInt(req.params.id);
  let content = req.body;
  let updated = items.update(id, content);
  res.status(200).json(updated);
}

function deletePerson(req, res) {
  let id = parseInt(req.params.id);
  let deleted = items.delete(id);
  res.status(204).send('item deleted');
}

module.exports = router;