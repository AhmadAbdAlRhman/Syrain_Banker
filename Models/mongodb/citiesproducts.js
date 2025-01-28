const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    product_id: {
        type: Schema.Types.ObjectId,
        ref: 'Prodcts',
        required: false
    },
    city_id: {
        type: Schema.Types.ObjectId,
        ref: 'Cities',
        required: true
    },
    market_id: {
        items:[
            {
                item:{
                    type: Schema.Types.ObjectId,
                    ref: 'Market',
                    required: true
                }
            }
        ]
    }
});

const citiesproducts = mongoose.model('Citiesproducts', userSchema);

module.exports = citiesproducts;