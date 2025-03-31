//conect to mongodb
const mongoose = require('mongoose');
const serverConfig = require('./serverConfig');
/***
 * the below function helps us to connect to a mongodb server
 * also we will use the index.js 
 */

async function connectDB(){
    try {
        await mongoose.connect(serverConfig.DB_URL);
        console.log("Successfully connected to the mongo db server ...");
    } catch (error){
        console.log("Not able to connect to the mongodb server");
        console.log(error);
    }
}

module.exports = connectDB;