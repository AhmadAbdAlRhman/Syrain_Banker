const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    tags: {
        items:[
            {
                name:{
                    type: String,
                    required: true
                }
            }
        ]
    }
});

const category = mongoose.model('Category', userSchema);

module.exports = category;