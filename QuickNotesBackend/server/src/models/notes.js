const mongoose = require("mongoose"); 

const noteSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId, 
        required : true, 
    }, 
    title : {
        type : String, 
        required : true, 
    }, 
    note : {
        type : String, 
        required : true, 
    }, 
    status : {
        type : Boolean, 
        default : true, 
    }, 
    createdAt : {
        type : Date, 
        default : Date.now
    }
}); 

module.exports  = new mongoose.model("Note", noteSchema); 