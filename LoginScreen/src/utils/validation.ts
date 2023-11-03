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
    name : string().required(),
    email : string().email().required(), 
    password : string().required()
})