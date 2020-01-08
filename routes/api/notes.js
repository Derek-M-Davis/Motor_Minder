const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')


// Note Model
const Note = require('../../models/Note')

// GET route api/vehicles/Notes
router.get('/', (req, res) => {
    Note.find()
    .sort({ date: -1})
    .then(notes => res.json(notes))
});

// POST route api/vehicles/Notes
router.post('/', auth, (req, res) => {
    const newNote = new Note({
        vehiclename: req.body.vehiclename,
        name: req.body.name,
        details: req.body.details,
        date: req.body.date
    });

    newNote.save().then(note => res.json(note))
});


// DELETE route api/vehicles/Notes/:id
router.delete('/:id', auth, (req, res) => {
    Note.findById(req.params.id)
    .then(note => note.remove().then(() => res.json({sucess: true})))
    .catch(err => res.status(404).json({success: false}))
});


module.exports = router;