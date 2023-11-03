import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    username : '',
    password : ''
}
const userSlice = createSlice({
    name : 'user', 
    initialState, 
    reducers : {
        setUserState : (state, action) => {
            
        }
    }
}); 

export const {setUserState} = userSlice.actions; 
export default userSlice.reducer