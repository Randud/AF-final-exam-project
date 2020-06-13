const expess = require('express');
const router = expess.Router();
const mongoose = require('mongoose');

const Event = require('../models/event');

//endpoint for create event
router.post('/create', (req, res, next) =>{
 
    const event = new Event({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        description: req.body.description,
        venue: req.body.venue,
        date: req.body.venue,
        time: req.body.time,
        phone: req.body.phone,
        social: req.body.social
    });

    event.save()
    .then(results => {
        console.log(results);
        res.status(201).json({
            message:'Event created succesfully!',
            createdEvent: event
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err})
    });
});


//endpoint for get all events
router.get('/getAll', (req, res, next) =>{
    Event.find()
    .exec()
    .then(docs => {
        console.log(docs);
        res.status(200).json(docs);
    })
    .catch(err => {
        console.log(err);
        console.log(err);
        res.status(500).json({error: err})
    });

});

//endpoint for get event by id
router.get('/get/:eventId', (req, res, next) =>{
    const id = req.params.eventId;
    Event.findById(id)
    .select('name description venue time phone social _id')
    .exec()
    .then(doc => {
        console.log(doc);
        if(doc){
            res.status(200).json(doc);
        }
        else{
            res.status(404).json({message: 'No valid entry found !'});
        }
      
    })
    .catch(
        err =>{ 
            console.log(err);
            res.status(200).json({error: err});
        });


});

router.patch('/:eventId', (req, res, next) =>{
    const id = req.params.eventId;
    const updateOps = {};

    for(const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    Event.update({_id: id}, {$set: updateOps
    })
    .exec()
    .then(results => {
        console.log(results);
        res.status(200).json(results);
    })
    .catch(err => {
        console.log(results);
        res.status(500).json({
            error: err 
        });
    });

});

//endpoint for delete event
router.delete('/delete/:eventId', (req, res, next) =>{
    const id = req.params.eventId;
    Event.remove({_id: id})
    .exec()
    .then(results => {
        res.status(200).json(results);
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });

});

module.exports = router;