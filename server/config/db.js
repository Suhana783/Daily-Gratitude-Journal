const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
<<<<<<< HEAD
        process.exit(1);
=======
        process.exit(1); // Exit with a non-zero code if connection fails
>>>>>>> 237bacfc5029147dbc7f0891df7d8ce5fe5e0c32
    }
};

module.exports = connectDB;