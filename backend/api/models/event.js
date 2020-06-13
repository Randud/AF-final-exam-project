const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, required: true},
    description: {type: String, required: true},
    venue: {type: String, required: true},
    date: {type: String, required: true},
    time: {type: String, required: true},
    phone: {type: Number, required: true},
    social: {type: String, required: true}
});

module.exports = mongoose.model('event', eventSchema);