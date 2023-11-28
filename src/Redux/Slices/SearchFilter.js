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
      // console.log("search Products");
      state.searchProducts = actions.payload; // sab products ka data liya
    },
    setFilterProducts: (state, action) => {
      state.searchValue = action.payload; // current data liya
      if (state.searchValue !== "") {
        state.style.display = "flex";
        state.filterItems = state.searchProducts.filter((value) => {
          return value.name.toLowerCase().includes(state.searchValue);
        });
        console.log(state.filterItems);
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
