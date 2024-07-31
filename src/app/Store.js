import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from '../redux/mallSlice'; 
import chooseMallReducer from '../redux/mallSlice'; 
import cartReducer from '../redux/mallSlice'; 
const store = configureStore({
  reducer: {
    items: itemsReducer,
    mall: chooseMallReducer,
    cart: cartReducer
  },
});

export default store;
