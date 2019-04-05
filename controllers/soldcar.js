const SoldCar = require('../models/soldcar');
const express = require('express');

async function showSold(req, res) {
    const soldCars = await SoldCar.getAllSold();
    res.render('car-sold', {
        locals: {
            carVals: SoldCar.displaySoldCars(soldCars)
        }
    });
}

module.exports = {showSold};