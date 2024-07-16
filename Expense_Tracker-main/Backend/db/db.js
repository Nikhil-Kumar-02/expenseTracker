const mongoose = require('mongoose');
require('dotenv').config();


const db = async () => {
    try {
        console.log('MongoDB trying to connect');
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error); 
    }
}
module.exports = db;


