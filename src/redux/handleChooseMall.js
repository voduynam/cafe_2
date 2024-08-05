import { createSlice } from '@reduxjs/toolkit';

export const mallSlice = createSlice({
    name: 'mall',
    initialState: {
        selectedMall: null,
        searchTerm: '',
        malls: [], // Assuming this gets populated from some API or static data
        filteredMalls: [],
    },
    reducers: {
        selectMall: (state, action) => {
            state.selectedMall = action.payload;
        },
        clearMall: (state) => {
            state.selectedMall = null;
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
            state.filteredMalls = state.malls.filter(mall =>
                mall.name.toLowerCase().includes(action.payload.toLowerCase())
            );
        },
        setMalls: (state, action) => {
            state.malls = action.payload;
            state.filteredMalls = action.payload.filter(mall =>
                mall.name.toLowerCase().includes(state.searchTerm.toLowerCase())
            );
        },
    },
});

export const { selectMall, clearMall, setSearchTerm, setMalls } = mallSlice.actions;

export const selectFilteredMalls = (state) => state.mall.filteredMalls;

export default mallSlice.reducer;
