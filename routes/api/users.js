const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

// User Model
const User = require('../../models/User')

// POST route api/users
router.post('/', (req, res) => {
 const {name, email, password} = req.body;
//  Validation
 if(!name || !email || !password) {
     return res.status(400).json({ msg: 'Please fill out all fields'})
 }
//  Check for Existing User
User.findOne({ email })
    .then(user => {
        //  Check for Existing User//  Check for Existing User
        if(user) return res.status(400).json({ msg: 'User already exists'})
        
        const newUser = new User ({
            name,
            email,
            password
        });
        // Password Hash
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err,hash) => {
                if(err) throw err;
                newUser.password = hash;
                newUser.save()
                .then(user => {
                    jwt.sign(
                        {id:user.id},
                        config.get('jwtSecret'),
                        {expiresIn: 3600}, 
                        (err, token) => {
                            if(err) throw err;
                            res.json({
                                token,
                                user: {
                                    id: user.id,
                                    name: user.name,
                                    email: user.email
                                }
                            });
                        }
                    )
                });
            });
        });
    });
});

module.exports = router;