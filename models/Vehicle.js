const mongoose = require('mongoose');
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
    }
});

module.exports = Vehicle = mongoose.model('vehicle',VehicleSchema)