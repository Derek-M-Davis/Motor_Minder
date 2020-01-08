const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')

// Event Model
const Event = require('../../models/Event')

// GET route api/vehicles/events
router.get('/', (req, res) => {
    Event.find()
    .sort({ date: -1})
    .then(events => res.json(events))
});

// POST route api/vehicles/events
router.post('/', auth, (req, res) => {
    const newEvent = new Event({
        name: req.body.name,
        details: req.body.details,
        date: req.body.date
    });

    newEvent.save().then(event => res.json(event))
});

// Update route api/vehicles/events
router.post('/:id', auth, (req, res) => {
    Event.findById(req.params.id)
    .then(event =>{
        event.name = req.body.name,
        event.details = req.body.details,
        event.date = req.body.date
        event.save().then(event => res.json(event))
        .catch(err => res.status(400).json({success: false}));

    })
    .catch(err => res.status(400).json({success: false}));

});

// DELETE route api/vehicles/events/:id
router.delete('/:id', auth, (req, res) => {
    Event.findById(req.params.id)
    .then(event => event.remove().then(() => res.json({sucess: true})))
    .catch(err => res.status(404).json({success: false}))
});


module.exports = router;