const User = require('../models/user');
const escapeHtml = require('../utils');

function getLoginPage(req, res) {
    res.render('login-page', {
        locals: {
            email: '',
        }
    });
}

async function attemptLogin(req, res) {

    const theEmail = escapeHtml(req.body.email);
    const thePassword = escapeHtml(req.body.password);


    const theUser = await User.getByEmail(theEmail);
    const passwordIsCorrect = theUser.checkPassword(thePassword);

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