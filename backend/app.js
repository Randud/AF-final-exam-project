 const express = require('express');
 const app = express();
 const morgan = require('morgan'); 
 const bodyParser = require('body-parser'); 
 const mongoose = require('mongoose');

 const eventsRoutes = require('./api/routes/events');

 //DB connections
 mongoose.connect('mongodb+srv://event-planner_admin:'+ process.env.MONGO_ATLAS_PW +'@eventplanner-qkiz0.mongodb.net/EventPlanner?retryWrites=true&w=majority',
     { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true }
    ).then(() => console.log("Mongo database is connected !"))
    .catch(err => console.log(err));


 app.use(morgan('dev'));
 app.use(bodyParser.urlencoded({extended: false}));
 app.use(bodyParser.json());
 
//handle CORS errors
app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
});

 app.use('/events', eventsRoutes);

app.use((req, res, next) =>{
    const error = new Error("not found!");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) =>{
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

 module.exports = app;