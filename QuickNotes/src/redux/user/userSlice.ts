import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const URL = "https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6"

const initialState = {
    username : '', 
    email : '', 
    password : '', 
}

const productSlice = createSlice({
    name : "product", 
    initialState, 
    reducers : {
        setUser : (state:any, action:any) => {
            state = {
                ...state, 
                ...action.payload
            }
            
        }, 
    }, 
}); 

export const {setUser} = productSlice.actions; 
export default productSlice.reducer; 