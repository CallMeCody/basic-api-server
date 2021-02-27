'use strict';

const express = require('express');
const PetModel = require('../models/pet.js')
const Pet = require('../models/pet.js')
const items = new Pet();

const router = express.Router();

// routes
router.get('/Pet', getPet);
router.get('/Pet/:id', getOnePet);
router.post('/Pet', createPet);
router.put('/Pet/:id', updatePet);
router.delete('/Pet:id', deletePet);

function getPet() {

}

function getOnePet() {

}

function createPet() {

}

function updatePet() {

}

function deletePet() {

}

module.exports = router;