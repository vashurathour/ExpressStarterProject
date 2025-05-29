const express = require('express');
const { login } = require('../controllers/authController');
const userRouter = require('./userRoute');

//we have to initialise a router object to add routes in a new file
// Routers are used for segregating your routes in different modules
const authRouter = express.Router();


userRouter.post('/',login); // this is a route registration


module.exports = authRouter; //exporting the router