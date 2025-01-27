const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    market_name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true, unique:true},
    market_phone:{type:String, required:true, unique:true},
    market_address:{type:String, required:true, unique:true},
    market_boi:{type:String, required:false},
    //products: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}] // reference to Product model
    seller_name:{type:String, required:true},
});

const Market = mongoose.model('Market', userSchema);

module.exports = Market;