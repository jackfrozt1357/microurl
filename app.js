const express= require('express');
const app = express();
const bodyparser = require('body-parser');
const mongoose =require('mongoose');
const morgan = require('morgan');
const connectionstring = require('./secret/db').connectionstring;


const urlRoute = require('./api/routes/urls');

app.use(morgan('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

mongoose.connect(connectionstring,{useNewUrlParser:true})
    .then(console.log("MONGODB CONNECTED"))
        .catch((err)=>console.log("MONGO ERROR:\n"+ err ));


app.use('/api/shorturl',urlRoute);


module.exports= app;