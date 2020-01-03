// ----- Dependencies ----- //
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const vehicles = require('./routes/api/vehicles');
const app = express();

// ----- Middleware ----- //
app.use(bodyParser.json()); 

// ----- DB Config ----- //
const db = require('./config/keys').mongoURI;

// ----- Mongoose Config ----- //
mongoose.connect(db)
    .then(()=> console.log('MongoDB connnected ...'))
    .catch(err=> console.log(err));

app.use('/api/vehicles', vehicles);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));  