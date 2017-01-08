var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Pets = require('../models/pets.js');

router.get('/', function(req, res) {
    Pets.find({}, function(err, petsResults) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            console.log('petsResults: ', petsResults);
            res.send(petsResults);
        }
    }); //end Pets.find
}); //end router.get

router.post('/', function(req, res) {
    console.log('req.body in router.post: ', req.body);
    var sentData = req.body;

    var newPet = new Pets({
        name: sentData.name,
        type: sentData.type,
        age: sentData.age,
        pic: sentData.pic
    }); //end newPet

    newPet.save(function(err) {
        if (err) {
            console.log('error saving pet: ', err);
            res.sendStatus(500);
        } else {
            console.log('success! a new pet has been saved!');
            res.sendStatus(201);
        }
    }); //end newPet.save
}); //end router.post

module.exports = router;
