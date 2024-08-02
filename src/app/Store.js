import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from '../redux/mallSlice'; 
import mallReducer from '../redux/handleChooseMall'; 
import cartReducer from '../redux/cartSlice'; 
import productsReducer from '../redux/mallIndonesiaSlice'; 
import paymentReducer from '../redux/paymentSlice'; 


const store = configureStore({
  reducer: {
    items: itemsReducer,
    mall: mallReducer,
    cart: cartReducer,
    products : productsReducer,
    payment: paymentReducer,



    
  },
});

export default store;
