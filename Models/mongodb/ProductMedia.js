const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    product_id: {
        type: String,
        required: true
    },
    product_description: {
        type: String,
        required: true
    },
    product_sponsership: {
        type: String,
        required: false
    },
    product_image: {
        type: String,
        required: true,
        unique: true
    },
    product_price: {
        type: String,
        required: true,
        unique: false
    },
    product_OwnerId: {
        type: Schema.Types.ObjectId,
        ref: 'Market',
        required: true
    },
});

const Products = mongoose.model('Products', userSchema);

module.exports = Products;