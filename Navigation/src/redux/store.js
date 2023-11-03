import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
// const rootReducer = combineReducers({

// })

const store = configureStore({
    reducer : userReducer
}); 

export default store; 