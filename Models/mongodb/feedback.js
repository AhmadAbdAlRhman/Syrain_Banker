const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    product_id: {
        type: Schema.Types.ObjectId,
        ref: 'Prodcts',
        required: false
    },
    customer_id: {
        type: Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    market_id: {
        type: Schema.Types.ObjectId,
        ref: 'Market',
        required: false
    },
    comment: {
        type: String,
        required: false,
        unique: false
    },
    rating: {
        type: Number,
        required: false,
        unique: true
    }
});

const feedback = mongoose.model('Feedback', userSchema);

module.exports = feedback;