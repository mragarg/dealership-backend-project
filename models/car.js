const db = require('./conn'); // Import Database

class Car { // Car Model Class

    // Get all cars for sale
    static getAll(){
        return db.any(`select * from cars`);
    }

    static displayCars(arrayOfCars){
        // Obtain Table to Add Values to
        // let table = document.getElementById('car-values');
        // Empty String to add HTML to
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

        console.log(tableValues);
        return tableValues;
        // table.innerHTML = tableValues;


    }

}

module.exports = Car; // Exports the class