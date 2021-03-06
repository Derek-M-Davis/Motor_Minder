const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')
const User = require('../../models/User')
const Vehicle = require('../../models/Vehicle')


// GET route api/users/vehicles
router.get('/', (req, res) => {
    Vehicle.find()
    .sort({ date: -1})
    .then(vehicles => res.json(vehicles))
});

// POST route api/users/vehicles
router.post('/', auth, (req, res) => {
    const newVehicle = new Vehicle({
        name: req.body.name,
        year: req.body.year
    });
    newVehicle.save().then(vehicle => res.json(vehicle))
});

// DELETE route api/vehicles/:id
router.delete('/:id', auth, (req, res) => {
    Vehicle.findById(req.params.id)
    .then(vehicle => vehicle.remove().then(() => res.json({sucess: true})))
    .catch(err => res.status(404).json({success: false}))
});


module.exports = router;