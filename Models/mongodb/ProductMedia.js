const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    product_id: {
        type: Schema.Types.ObjectId,
        ref: 'Prodcts',
        required: true
    },
    product_image: {
        type: String,
        required: false,
        unique: true
    },
    product_vedio: {
        type: String,
        required: false,
        unique: true
    }
});

const ProductMedia = mongoose.model('ProductMedia', userSchema);

module.exports = ProductMedia;