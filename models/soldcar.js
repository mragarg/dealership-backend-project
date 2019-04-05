const db = require('./conn'); // Import Database

class SoldCar {

    static getAllSold() {
        return db.any('select s.id, u.first_name, u.last_name, c.year, c.make, c.model, c.price from soldcars s inner join users u on s.user_id=u.id inner join cars c on s.car_id=c.id;');
    }

    static displaySoldCars(arrayOfSold) {
        let tableValues = ``;

        arrayOfSold.forEach((car) => {
            tableValues += `
            <tr>
                <th scope="row" class="text-center">${car.id}</th>
                <td>${car.first_name} ${car.last_name}</td>
                <td>${car.year}</td>
                <td>${car.make}</td>
                <td>${car.model}</td>
            </tr>
            `
        });

        // console.log(tableValues);
        return tableValues;
    }

}

module.exports = SoldCar;