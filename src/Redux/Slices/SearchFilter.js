import { createSlice } from "@reduxjs/toolkit";

const SearchFilter = createSlice({
  name: "Slice4",
  initialState: {
    searchProducts: [],
    filterItems: [],
    searchValue: "",
    style: {
      display: "",
    },
  },
  reducers: {
    getProducts: (state, actions) => {
      state.searchProducts = actions.payload; // sab products ka data liya
    },
    setFilterProducts: (state, action) => {
      state.searchValue = action.payload; // current data liya
      if (state.searchValue !== "") {
        state.style.display = "flex";
        state.filterItems = state.searchProducts.filter((value) => {
          return value.name.includes(state.searchValue);
        });
      } else {
        state.style.display = "none";
      }
    },
    deleteSearchValue: (state) => {
      state.searchValue = "";
      state.style.display = "none";
    },
    selectProduct: (state) => {
      state.searchValue = "";
      state.style.display = "none";
    },
  },
});

export default SearchFilter.reducer;

export const {
  getProducts,
  setFilterProducts,
  deleteSearchValue,
  selectProduct,
} = SearchFilter.actions;
