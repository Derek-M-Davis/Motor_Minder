const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    name: {
        type:String,
        required: true
    },
    details: {
        type:String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Event = mongoose.model('event',EventSchema)