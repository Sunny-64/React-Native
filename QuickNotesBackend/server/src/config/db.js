const mongoose = require("mongoose"); 

const connectDatabase = async () => {
    try{
        await mongoose.connect("mongodb://localhost:27017/QuickNotes"); 
        console.log(`Database connected...`); 
    }
    catch(err){
        console.log(err);
    }
}

module.exports = connectDatabase; 