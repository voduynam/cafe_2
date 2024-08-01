import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from '../redux/mallSlice'; 
import chooseMallReducer from '../redux/handleChooseMall'; 
import cartReducer from '../redux/cartSlice'; 
const store = configureStore({
  reducer: {
    items: itemsReducer,
    mall: chooseMallReducer,
    cart: cartReducer
  },
});

export default store;
