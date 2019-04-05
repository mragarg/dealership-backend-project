const express = require('express');
const Router = express.Router;
const userRoutes = Router();

const {
    getLoginPage,
    attemptLogin
} = require('../controllers/user');

userRoutes.get('/login', getLoginPage);

userRoutes.post('/login', attemptLogin);

module.exports = userRoutes;