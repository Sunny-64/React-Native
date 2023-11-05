import {string, object} from 'yup'; 

export const validateEmail = (email:string) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true; 
    }
    else{
        return false;
    }
}

export const userSchema = object({
    username : string().required(),
    email : string().email().required(), 
    password : string().required().min(6).max(16)
})