const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
});

const cities = mongoose.model('Cities', userSchema);

module.exports = cities;