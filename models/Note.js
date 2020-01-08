const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    vehiclename: {
        type:String,
        required: true
    },
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

module.exports = Note = mongoose.model('note',NoteSchema)