const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth')

// User Model
const User = require('../../models/User')

// POST route api/auth
router.post('/', (req, res) => {
 const {email, password} = req.body;
//  Validation
 if(!email || !password) {
     return res.status(400).json({ msg: 'Please fill out all fields'})
 }
User.findOne({ email })
    .then(user => {
        //  Check for existing User
        if(!user) return res.status(400).json({ msg: 'User does not exist'})
        
        //    Validate Password
        bcrypt.compare(password, user.password)
        .then(isMatch => {
            if(!isMatch) return res.status(400).json({msg: 'Invalid Password'});
            
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

// Get route api/user
router.get('/user', auth, (req,res) => {
    User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user));
})

module.exports = router;