const mongoose =require("mongoose");

const URL=process.env.MONGODB_URI;
mongoose.connect(URL); 

const connectDb = async()=>{
    try {
        await mongoose.connect(URL);
        console.log("Database Connection Succesful")
    } catch (error) {
        console.log("Database Connection Failed");
        process.exit(0);
    }
}

module.exports = connectDb;