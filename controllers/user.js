const User = require('../models/user');

function getLoginPage(req, res) {
    res.render('login-page', {
        locals: {
            email: '',
        }
    });
}

async function attemptLogin(req, res) {
    console.log(req.body.email);
    console.log(req.body.password);

    const theUser = await User.getByEmail(req.body.email);
    // const passwordIsCorrect = theUser.checkPassword(req.body.password);
    console.log(theUser);
}

module.exports = {
    getLoginPage,
    attemptLogin
};