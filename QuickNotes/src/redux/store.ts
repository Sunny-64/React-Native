import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducers from './cart/cartSlice'
import productReducer from './products/productSlice';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,

};


const rootReducer = combineReducers({
  cart : cartReducers,
  product : productReducer,
}); 

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store:any = configureStore({ 
    reducer : persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
}); 

export default store; 