const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true, unique:true},
    phone:{type:String, required:true, unique:true},
    address:{type:String, required:true, unique:true}
});

const Customer = mongoose.model('Customer', userSchema);

module.exports = Customer;