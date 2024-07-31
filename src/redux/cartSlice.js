import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(item =>
        item.id === newItem.id &&
        item.size === newItem.size &&
        item.hot === newItem.hot
      );

      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity++;
        state.items[existingItemIndex].totalPrice = state.items[existingItemIndex].quantity * state.items[existingItemIndex].price;
        state.totalPrice += state.items[existingItemIndex].price;
      } else {
        state.items.push({ ...newItem, quantity: 1, totalPrice: newItem.price });
        state.totalPrice += newItem.price;
      }
    },

    removeFromCart(state, action) {
      const { id, size, hot } = action.payload;
      const existingItemIndex = state.items.findIndex(item =>
        item.id === id &&
        item.size === size &&
        item.hot === hot
      );

      if (existingItemIndex !== -1) {
        const removedItem = state.items[existingItemIndex];
        if (removedItem.quantity > 1) {
          removedItem.quantity--;
          removedItem.totalPrice = removedItem.quantity * removedItem.price;
          state.totalPrice -= removedItem.price;
        } else {
          state.totalPrice -= removedItem.totalPrice;
          state.items.splice(existingItemIndex, 1);
        }
      }
    },

    incrementQuantity(state, action) {
      const { id, size, hot } = action.payload;
      const existingItemIndex = state.items.findIndex(item =>
        item.id === id &&
        item.size === size &&
        item.hot === hot
      );
      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity++;
        state.items[existingItemIndex].totalPrice = state.items[existingItemIndex].quantity * state.items[existingItemIndex].price;
        state.totalPrice += state.items[existingItemIndex].price;
      }
    },

    decrementQuantity(state, action) {
      const { id, size, hot } = action.payload;
      const existingItemIndex = state.items.findIndex(item =>
        item.id === id &&
        item.size === size &&
        item.hot === hot
      );
      if (existingItemIndex !== -1) {
        const decreasedItem = state.items[existingItemIndex];
        if (decreasedItem.quantity > 1) {
          decreasedItem.quantity--;
          decreasedItem.totalPrice = decreasedItem.quantity * decreasedItem.price;
          state.totalPrice -= decreasedItem.price;
        }
      }
    },

    clearAll(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearAll,
} = cartSlice.actions;

export default cartSlice.reducer;
