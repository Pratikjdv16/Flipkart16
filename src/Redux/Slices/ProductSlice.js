import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "Slice3",
  initialState: {
    singleProduct: [],
    productImages: [],
    productDescription: [],
    productColors: [],
    productImg: "",
    productColor: "",
  },
  reducers: {
    setSingleProduct: (state, action) => {
      state.singleProduct = action.payload;
      state.productImg = state.singleProduct.thumbnail;
      state.productImages = state.singleProduct.image;
      state.productDescription = state.singleProduct.description;
      state.productColors = state.singleProduct.colors;
    },

    selectProductImage: (state, action) => {
      state.productImg = action.payload;
    },

    selectProductColor: (state, action) => {
      if (action.payload) {
        state.productColor = action.payload;
      }
    },
  },
});

export default ProductSlice.reducer;

export const { setSingleProduct, selectProductImage, selectProductColor } =
  ProductSlice.actions;
