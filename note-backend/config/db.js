
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const connect = await mongoose.connect("mongodb://localhost:27017/mininotes");
        console.log("Database Connected");

    } catch (error) {
        console.error("The DB connection Error : ", error);

    }
}

module.exports = connectDB;