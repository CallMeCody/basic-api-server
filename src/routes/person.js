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
  res.send('Hello')
}

function getOnePerson(req, res) {

}

function createPerson(req, res) {
  let obj = req.body;
  let newPerson = items.create(obj);
  res.status(201).json(newPerson);
}

function updatePerson(req, res) {

}

function deletePerson(req, res) {

}

module.exports = router;