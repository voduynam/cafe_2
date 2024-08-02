import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const ITEMS_PER_PAGE = 10;

// fetchItems createAsyncThunk
export const fetchItems = createAsyncThunk(
  'products/fetchItems',
  async ({ page = 1 }, { rejectWithValue }) => {
    try {
      const res = await axios.get(`https://6665b6afd122c2868e418159.mockapi.io/mallofindonesia?page=${page}&limit=${ITEMS_PER_PAGE}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'An error occurred');
    }
  }
);

const ProductSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    status: 'idle',
    error: null,
    currentPage: 1,
    totalPages: 1,
  },
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.status = 'success';
        state.products = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { setPage } = ProductSlice.actions;

export default ProductSlice.reducer;
