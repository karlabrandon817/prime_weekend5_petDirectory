var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var petSchema = new Schema({
    name: String,
    type: String,
    age: Number,
    pic: String
}); //end var petSchema

var petDirectory = mongoose.model('pets', petSchema);

module.exports = petDirectory;
