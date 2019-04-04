const db = require('./conn'); // Import Database

class Car { // Car Model Class

    // Get all cars for sale
    static getAll(){
        return db.any(`select * from cars`);
    }

}

module.exports = Car; // Exports the class