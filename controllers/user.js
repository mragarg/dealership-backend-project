const User = require('../models/user');

function getLoginPage(req, res) {
    res.render('login-page', {
        locals: {
            email: '',
        }
    });
}

async function attemptLogin(req, res) {

    const theUser = await User.getByEmail(req.body.email);
    const passwordIsCorrect = theUser.checkPassword(req.body.password);

    if(passwordIsCorrect) {
        if(req.body.email === "admin@test.com") {
            res.redirect('/user/admindash');
        }
        else {
            res.redirect('/user/dash');
        }
    }
    else {
        res.render('login-page', {
            locals: {
                email: req.body.email
            }
        })
    }

}

function getAdminDash(req, res) {
    res.render('admin-dash');
}

function getDash(req, res) {
    res.render('dashboard');
}

module.exports = {
    getLoginPage,
    attemptLogin,
    getAdminDash,
    getDash
};