const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const dbURI  = process.env.DBURL;
const connectDB = async()=>{
    try {
        await mongoose.connect(dbURI);
        console.log('MongoDB Connected...');
    }catch(err){
        console.error("the connection is refused: "+err.message);
        process.exit(1);
    }
}
module.exports = connectDB;