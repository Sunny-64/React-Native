const bcrypt = require("bcrypt"); 
const jwt = require("jsonwebtoken"); 
const {User} = require("./../models/index"); 

exports.login = async (req, res) => {
    const {email, password} = req.body; 
    try{
        let user = await User.findOne({email}); 
        if(!user){
            return; 
        }
        if(!bcrypt.compareSync(password, user.password)){
            return res.status(401).json({
                success : false, 
                message : "Incorrect email or password"
            }); 
        }
        user = user.toJSON(); 
        delete user.password; 

        const payload = jwt.sign(user, process.env.SECRET_KEY); 

        return res.status(200).json({
            success : true, 
            data : payload
        }); 
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success : false, 
            message : err.message
        })
    }
}