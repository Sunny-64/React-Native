const bcrypt = require("bcrypt"); 
const {User} = require("./../models"); 

exports.register = async (req, res) => {
    const {username, email, password} = req.body; 
    if(!(username && email && password)){
        return res.status(400).json({
            success : false, 
            message : "invalid data"
        })
    }
    
    if((username.trim() === "") && (email.trim() === "") && (password>trim() === "")){
       return res.status(400).json({
            success : false, 
            message : "invalid data",
       })
    }

    try{
        const newUser = new User({
            username, 
            email, 
            password : bcrypt.hashSync(password, 10), 
        }); 
        console.log("new user")
        await newUser.save(); 
        return res.status(200).json({
            success : true, 
            message : "user created successfully"
        })
    }
    catch(err){
        console.log(err); 
        return res.status(500).json({
            success : false, 
            message : "failed to create user",
        })
    }
}

