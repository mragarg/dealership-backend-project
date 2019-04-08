const express = require('express');
const es6Renderer = require('express-es6-template-engine');

// Import Model Class here 
const User = require('./models/user');
const Car = require('./models/car');
const SoldCar = require('./models/soldcar');

// Routers
const carRouter = require('./routes/car');
const userRouter = require('./routes/user');


const app = express();
const PORT = process.env.PORT;
const http = require('http');
const querystring = require('querystring');

const helmet = require('helmet');
app.use(helmet());

// SESSION - ?

// For POST. Configures express to use the built-in middleware that 
// can deal with form data.
app.use(express.urlencoded({extended: true}));


// ES6
app.engine('html', es6Renderer); // Introduction
app.set('view engine', 'html'); // Express use its view engine that speaks html
app.set('views', 'views'); // Express where to find view files (views directory)

// GET Home
app.get('/', (req, res) => {
    res.render('index');
});

// Car Router
app.use('/car', carRouter);

// User Router
app.use('/user', userRouter);


// APP LISTEN
app.listen(PORT, () => {
    console.log(`Server is running on Port: ${PORT}.`);
});