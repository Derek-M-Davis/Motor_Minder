// ----- Dependencies ----- //
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const vehicles = require('./routes/api/vehicles');
const app = express();

// ----- Middleware ----- //
app.use(bodyParser.json()); 

// ----- DB Config ----- //
const db = require('./config/keys').mongoURI;

// ----- Mongoose Config ----- //
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology:true, useFindAndModify:false, useCreateIndex: true })
    .then(()=> console.log('MongoDB connnected ...'))
    .catch(err=> console.log(err));

// ----- Components Config ----- //
app.use('/api/vehicles', vehicles);

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