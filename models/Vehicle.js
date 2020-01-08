const mongoose = require('mongoose');
const Event = require('../models/Event');
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
    savedEvents: [Event.schema]
});

module.exports = Vehicle = mongoose.model('vehicle',VehicleSchema)