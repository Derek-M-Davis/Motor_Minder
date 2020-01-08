const mongoose = require('mongoose');
const Note = require('../models/Note');
const Schema = mongoose.Schema;

const VehicleSchema = new Schema({
    name: {
        type:String,
        required: true
    },
    year: {
        type:Number,
    },
    date: {
        type: Date,
        default: Date.now
    },
    savedNotes: [Note.schema]
});

module.exports = Vehicle = mongoose.model('vehicle',VehicleSchema)