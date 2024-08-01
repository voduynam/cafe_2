import { createSlice } from '@reduxjs/toolkit';


const calculatePriceForSize = (price, size) => {
    let sizePriceAdjustment = 0;
    if (size === "M") {
        sizePriceAdjustment = 2;
    } else if (size === "L") {
        sizePriceAdjustment = 5;
    }
    return price + sizePriceAdjustment;
};

const calculateTotalPrice = (items) => {
  return items.reduce((total, item) => {
    return total + item.totalPrice;
  }, 0);
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalPrice: 0,
    },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const price = Number(newItem.price);
            const priceWithSize = calculatePriceForSize(price, newItem.size);

            const existingItemIndex = state.items.findIndex(item =>
                item.id === newItem.id &&
                item.size === newItem.size &&
                item.hot === newItem.hot
            );

            if (existingItemIndex !== -1) {
             
                const item = state.items[existingItemIndex];
                item.quantity++;
                item.totalPrice = item.quantity * priceWithSize;
                state.totalPrice += priceWithSize; 
            } else {
          
                const newItemWithPrice = {
                    ...newItem,
                    quantity: 1,
                    totalPrice: priceWithSize,
                };
                state.items.push(newItemWithPrice);
                state.totalPrice += priceWithSize; 
            }
            state.totalPrice = calculateTotalPrice(state.items);
       
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
                const priceWithSize = calculatePriceForSize(Number(removedItem.price), removedItem.size);

                if (removedItem.quantity > 1) {
                    removedItem.quantity--;
                    removedItem.totalPrice = removedItem.quantity * priceWithSize;
                    state.totalPrice -= priceWithSize; 
                } else {
                    state.totalPrice -= removedItem.totalPrice;
                    state.items.splice(existingItemIndex, 1);
                }

                state.totalPrice = calculateTotalPrice(state.items);
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
                const item = state.items[existingItemIndex];
                const priceWithSize = calculatePriceForSize(Number(item.price), item.size);
                item.quantity++;
                item.totalPrice = item.quantity * priceWithSize;
                state.totalPrice += priceWithSize; 

            }
            state.totalPrice = calculateTotalPrice(state.items);
        },

        decrementQuantity(state, action) {
            const { id, size, hot } = action.payload;
            const existingItemIndex = state.items.findIndex(item =>
                item.id === id &&
                item.size === size &&
                item.hot === hot
            );

            if (existingItemIndex !== -1) {
                const item = state.items[existingItemIndex];
                const priceWithSize = calculatePriceForSize(Number(item.price), item.size);
                if (item.quantity > 1) {
                    item.quantity--;
                    item.totalPrice = item.quantity * priceWithSize;
                    state.totalPrice -= priceWithSize; 
                }else{
                  state.items.splice(existingItemIndex, 1);
                }

            }
            state.totalPrice = calculateTotalPrice(state.items);
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
