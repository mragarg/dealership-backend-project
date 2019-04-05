const express = require('express');
const Router = express.Router;
const userRoutes = Router();

const {
    getLoginPage,
    attemptLogin,
    getAdminDash,
    getDash
} = require('../controllers/user');

userRoutes.get('/login', getLoginPage);

userRoutes.post('/login', attemptLogin);

userRoutes.get('/admindash', getAdminDash);

userRoutes.get('/dash', getDash);

module.exports = userRoutes;