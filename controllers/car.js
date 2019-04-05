const Car = require('../models/car');

async function showAllCars(req, res) {
    const carSales = await Car.getAll();
    res.render('car', {
        locals:
            {
                carVals: Car.displayCars(carSales)
            }
        });
}

function addCarPage(req, res) {
    res.render('car-add');
}

async function addCarDB(req, res) {
    await Car.addCar(req.body.carYear, req.body.carMake, req.body.carModel, req.body.carMileage, req.body.carPrice);
    res.redirect('/car');
}


module.exports = {
    showAllCars,
    addCarPage,
    addCarDB
};