const express = require('express');

const ServerConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');

//const PORT = process.env.PORT;
const app = express();
//which type of data will to be read
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended: true}));


app.post('/ping',(req,res) =>{
    console.log(req.body);
    return res.json({message: "pong"});
})

app.listen(ServerConfig.PORT, async () => {
     await  connectDB();    
    console.log(`Server started at port ${ServerConfig.PORT}... !!`);
});

