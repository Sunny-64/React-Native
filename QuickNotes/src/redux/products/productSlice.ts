import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const URL = "https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6"


export const fetchBeers : any = createAsyncThunk("fetchBeers", async (_,thunkApi) => {
    try{
        const res = await axios.get(URL); 
        // thunkApi.dispatch()
        return res.data; 
    }
    catch(err){
        console.log(err); 
    }
}); 

const initialState = {
    isLoading : false, 
    data : null, 
    error : ''
}

const productSlice = createSlice({
    name : "product", 
    initialState, 
    reducers : {

    }, 
    extraReducers : (builder) => {
        builder.addCase(fetchBeers.fulfilled, (state, action : any) => {
            state.data = action?.payload; 
            state.isLoading = false; 
        })
        builder.addCase(fetchBeers.pending, (state, action) => {
            state.isLoading = true; 
        }); 
        builder.addCase(fetchBeers.rejected, (state, action) => {
            state.error = 'failed to fetch'; 
            state.isLoading = false; 
        });
        
    }
}); 

export default productSlice.reducer; 