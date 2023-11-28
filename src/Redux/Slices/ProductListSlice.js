import { createSlice } from "@reduxjs/toolkit";

const ProductListSlice = createSlice({
  name: "Slice1",
  initialState: {
    products: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload; // set products in products state
      // console.log(state.products);
    },
  },
});

export default ProductListSlice.reducer;

export const { setProducts } = ProductListSlice.actions;
