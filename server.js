// ----- Dependencies ----- //
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');

const app = express();

// ----- Middleware ----- //
app.use(express.json()); 

// ----- DB Config ----- //
const db = config.get('mongoURI');

// ----- Mongoose Config ----- //
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology:true, useFindAndModify:false, useCreateIndex: true })
    .then(()=> console.log('MongoDB connnected ...'))
    .catch(err=> console.log(err));

// ----- Components Config ----- //
app.use('/api/vehicles', require('./routes/api/vehicles'));
app.use('/api/users', require('./routes/api/users'));


// Serve Static assets if in production
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
};

// ----- Listner  ----- //
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));  