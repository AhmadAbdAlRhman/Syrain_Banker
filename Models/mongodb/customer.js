const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name:{type:String, required:true},
    second_name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true, unique:true},
    phone:{type:String, required:true, unique:true},
    address:{type:String, required:true, unique:true},
    resetTokenExpiration:{type:String, required:false, unique:true},
    resToken:{type:String, required:false, unique:true},
    photo:{type:String, required:false, unique:true}
});

const Customer = mongoose.model('Customer', userSchema);

module.exports = Customer;