var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var petSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    pic: {
        type: String,
        required: true
    }
}); //end var petSchema

var petDirectory = mongoose.model('pets', petSchema);

module.exports = petDirectory;
