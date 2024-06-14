const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    game:{
        type:String,
        required:true
    },

    genre:{
        type:String,
        required:true},

    price:{
        type:String,
        required:true
    },

    publisher:{
        type:String,
        required:true
    },

    filename:{
        type:String,
        required:true
    },
});

const Service = mongoose.model("Service",serviceSchema);
module.exports = Service;