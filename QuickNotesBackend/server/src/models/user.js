const mongoose = require("mongoose"); 

const userSchema = new mongoose.Schema({
    username : {
        type : String, 
        required : true, 
    }, 

    email : {
        type : String, 
        required : true, 
        unique : true, 
    },

    password : {
        type : String, 
        required : true,
    }, 

    status : {
        type : Boolean, 
        default : true, 
    }, 

    createdAt : {
        type : Date, 
        default : Date.now,
    }
}); 

module.exports = new mongoose.model("User", userSchema); 