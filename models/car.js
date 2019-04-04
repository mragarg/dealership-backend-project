const db = require('./conn'); // Import Database

class Car { // Car Model Class

    constructor(id, year, make, model, price, mileage) {
        this.id = id;
        this.year = year;
        this.make = make;
        this.model = model;
        this.price = price;
        this.mileage = mileage;
    }

    // Get all cars for sale
    static getAll() {
        return db.any(`select * from cars`);
    }

    static displayCars(arrayOfCars) {

        let tableValues = ``;

        arrayOfCars.forEach((car) => {
            tableValues += `
            <tr>
                <th scope="row">${car.year}</th>
                <td>${car.make}</td>
                <td>${car.model}</td>
                <td>${car.mileage}</td>
                <td>${car.price}</td>
            </tr>
            `
        });

        // console.log(tableValues);
        return tableValues;

    }

    

}

module.exports = Car; // Exports the class