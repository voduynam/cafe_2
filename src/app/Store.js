import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from '../redux/mallSlice'; 
import chooseMallReducer from '../redux/handleChooseMall'; 
import cartReducer from '../redux/cartSlice'; 
import paymentReducer from '../redux/paymentSlice'; 

const store = configureStore({
  reducer: {
    items: itemsReducer,
    mall: chooseMallReducer,
    cart: cartReducer,
    payment: paymentReducer,
  },
});

export default store;
