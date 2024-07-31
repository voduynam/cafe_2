import { createSlice } from '@reduxjs/toolkit';

export const mallSlice = createSlice({
    name: 'mall',
    initialState: {
        selectedMall: null,
    },
    reducers: {
        selectMall: (state, action) => {
            state.selectedMall = action.payload;
        },
        clearMall: (state) => {
            state.selectedMall = null;
        },
    },
});

export const { selectMall, clearMall } = mallSlice.actions;
export default mallSlice.reducer;
