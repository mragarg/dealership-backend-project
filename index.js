const express = require('express');
const es6Renderer = require('express-es6-template-engine');

const app = express();
const http = require('http');
const querystring = require('querystring');

// SESSION - ?

// For POST. Configures express to use the built-in middleware that 
// can deal with form data.
app.use(express.urlencoded({extended: true}));


const PORT = 3000;

// Import Model Class here 
const User = require('./models/user');
const Car = require('./models/car');
const SoldCar = require('./models/soldcar');


// ES6
app.engine('html', es6Renderer); // Introduction
app.set('view engine', 'html'); // Express use its view engine that speaks html
app.set('views', 'views'); // Express where to find view files (views directory)

// GET Home
app.get('/', (req, res) => {
    res.render('index');
});

// GET Login
app.get('/login', (req, res) => {
    res.send('Login Page');
});

// GET Cars
app.get('/car', async (req, res) => {
    // Puts all the Cars for Sale into an array
    const carsSale = await Car.getAll();

    // console.log(carsSale);
    // console.log(Car.displayCars(carsSale));

    // Renders the car.html page
    res.render('car', {locals:
        {
            carVals: Car.displayCars(carsSale) // Puts the values of cars for sale into a table
        }
    });

});

// GET Cars/Add
app.get('/car/add', (req, res) => {
    res.render('car-add');
});

app.post('/car/add', (req, res) => {
    console.log(req.body.carYear);
    console.log(req.body.carMake);
    console.log(req.body.carModel);
    console.log(req.body.carMileage);
    console.log(req.body.carPrice);
});

// APP LISTEN
app.listen(PORT, () => {
    console.log(`Server is running on Port: ${PORT}.`);
});