const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

// MongoDB Atlas connection URL
const url = process.env.MONGO_URI

// Create a connectDB function
const connectDB = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected');
    } catch (err) {
        console.error('MongoDB Connection Error:', err.message);
        process.exit(1); // Stop the app if database connection fails
    }
};

module.exports = connectDB;
