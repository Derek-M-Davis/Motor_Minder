const mongoose = require('mongoose');
const Vehicles = require('../models/Vehicle')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true,
        unique: true
    },
    password: {
        type:String,
        required: true
    },
    register_date: {
        type: Date,
        default: Date.now
    },
    savedVehicles: [Vehicles.schema]
});

module.exports = User = mongoose.model('user', UserSchema)