const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true, unique:true},
    phone:{type:String, required:true, unique:true},
    address:{type:String, required:true, unique:true}
});

const Seller = mongoose.model('Seller', userSchema);

module.exports = Seller;