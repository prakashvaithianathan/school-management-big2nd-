const express = require('express');
const app = express();
app.use(express.json());
const dotenv = require('dotenv');
dotenv.config({path:'config/config.env'})
const mongoDB = require('./config/database');
mongoDB();

const api = require('./routes');
app.use('/',api)
app.get('/', (req, res) =>{
    res.send('this is home route')
})

app.listen( process.env.PORT,()=>{
    console.log('server has been started');
})
