const express = require('express');
const Router = express.Router;
const carRoutes = Router();

const {
    showAllCars,
    addCarPage,
    addCarDB
} = require('../controllers/car');


carRoutes.get('/', showAllCars);

carRoutes.get('/add', addCarPage);

carRoutes.post('/add', addCarDB);

// carRoutes.post('/delete');

module.exports = carRoutes;