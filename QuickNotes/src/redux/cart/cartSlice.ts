import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading : false, 
    data : [], 
    error : ''
}

const cartSlice = createSlice({
    name : "cart", 
    initialState, 
    reducers : {
        addItemToCart : (state:any, action:any) => {
            let itemFound = false; 
            state.data.forEach((item:any, index:number) => {
                if(item.id === action.payload.id){
                    item.quantity += action.payload.quantity;
                    itemFound = true; 
                }
            })
            if(!itemFound){
                state.data.push(action.payload); 
            }
        }, 
        removeItemFromCart : (state:any, action:any) => {
            const filteredData = state.data.filter((item:any) => item.id !== action.payload.id); 
            state.data = [...filteredData]; 
        }, 
        emptyCart : (state:any) => {
            state.data = []; 
            console.log("cart empty executed..")
        }
    }
}); 

export const {addItemToCart, removeItemFromCart, emptyCart} = cartSlice.actions; 
export default cartSlice.reducer; 