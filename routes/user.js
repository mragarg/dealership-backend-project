const express = require('express');
const Router = express.Router;
const userRoutes = Router();

const {
    getLoginPage,
    attemptLogin
} = require('../controllers/user');

userRoutes.get('/login', getLoginPage);

userRoutes.post('/login', attemptLogin);

userRoutes.get('/admindash', (req, res) => {
    res.send("Admin Dash");
});

userRoutes.get('/dash', (req, res) => {
    res.send("Regular Person Dash");
});

module.exports = userRoutes;