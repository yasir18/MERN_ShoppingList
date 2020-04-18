const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('config');
const items = require ('./routes/api/items');
const users= require('./routes/api/users');
const auth=require('./routes/api/auth');

const app = express();

app.use(cors());

app.use(bodyParser.json());

//getting uri from config file
const db=config.get('mongoURI');

mongoose.connect(db,{ useNewUrlParser: true, useUnifiedTopology: true ,useCreateIndex:true})
        .then(()=>console.log('MongoDb connected.....'))
        .catch(err=>console.log(err))

//use routes
app.use('/api/items',items);
app.use('/api/users',users);
app.use('/api/auth',auth);

//env.PORt is used when deployed on heroku or netlify 
const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log(`Server started on ${port}`));