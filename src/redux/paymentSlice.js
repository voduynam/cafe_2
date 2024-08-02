
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedPaymentMethod: 'OVO', 
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setPaymentMethod: (state, action) => {
      state.selectedPaymentMethod = action.payload;
    },
  },
});

export const { setPaymentMethod } = paymentSlice.actions;
export default paymentSlice.reducer;
