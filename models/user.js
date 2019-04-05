const db = require('./conn'); // Import Database
const bcrypt = require('bcryptjs');

class User {

    constructor(id, first_name, last_name, email, password) {
        this.id = id;
        this.firstName = first_name;
        this.lastName = last_name;
        this.email = email;
        this.password = password;
    }

    static getByEmail(email) {
        return db.one(`select * from users where email=$1`, [email])
            .then((userData) => {
                const aUser = new User(
                    userData.id,
                    userData.first_name,
                    userData.last_name,
                    userData.email,
                    userData.password);
                return aUser;
            });
    }

}

module.exports = User;