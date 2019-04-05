const express = require('express');
const Router = express.Router;
const carRoutes = Router();

const {
    showAllCars,
    addCarPage,
    addCarDB,
    deleteCarPage,
    deleteCarDB
} = require('../controllers/car');


carRoutes.get('/', showAllCars);

carRoutes.get('/add', addCarPage);

carRoutes.post('/add', addCarDB);

carRoutes.get('/delete', deleteCarPage);

carRoutes.post('/delete', deleteCarDB);

module.exports = carRoutes;