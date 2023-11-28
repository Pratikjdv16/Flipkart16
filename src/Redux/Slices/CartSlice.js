import { createSlice } from "@reduxjs/toolkit";

let getItem = localStorage.getItem("cartProducts");
let cartStore = JSON.parse(getItem);

const CartSlice = createSlice({
  name: "Slice5",
  initialState: {
    setProduct: [],
    cartProducts: [...cartStore],
    removePopUp: undefined,
    removeItemIndex: "",
    priceData: {
      totalOriginalPrice: 0,
      totalDiscountPrice: 0,
      totalPrice: 0,
    },
  },
  reducers: {
    setCartProduct: (state, action) => {
      state.setProduct = action.payload;
      state.cartProducts = [...state.cartProducts, state.setProduct];
      localStorage.setItem("cartProducts", JSON.stringify(state.cartProducts));
    },

    incrementProductQuantity: (state, action) => {
      state.cartProducts = state.cartProducts.map((item) => {
        if (item.index === action.payload) {
          item.quantity = item.quantity + 1;
        }
        return { ...item, quantity: item.quantity };
      });
    },

    decrementProductQuantity: (state, action) => {
      state.cartProducts = state.cartProducts.map((item) => {
        if (item.index === action.payload) {
          item.quantity = item.quantity > 1 ? item.quantity - 1 : item.quantity;
        }
        return { ...item, quantity: item.quantity };
      });
    },

    setRemovePopUp: (state, action) => {
      state.removeItemIndex = action.payload;
      state.removePopUp = true;
    },

    cancelPopUp: (state) => {
      state.removePopUp = false;
    },

    removeProduct: (state) => {
      state.cartProducts = state.cartProducts.filter((value) => {
        if (value.index === state.removeItemIndex) {
          state.removePopUp = false;
          return false;
        } else {
          return true;
        }
      });
    },

    setTotalPrice: (state) => {
      state.priceData.totalOriginalPrice = state.cartProducts.reduce(
        (pValue, cValue) => {
          // 0 + 86000 = 86000
          // 86000 + 70000 = 156000
          return pValue + cValue.originalPrice * cValue.quantity;
        },
        0
      );

      state.priceData.totalDiscountPrice = state.cartProducts.reduce(
        (pValue, cValue) => {
          // 0 + (86000 - 50000) = 0 + 36000 = 36000
          // 36000 + (70000 - 61000) = 36000 + 9000 = 45000
          return (
            pValue +
            (cValue.originalPrice * cValue.quantity -
              cValue.discountPrice * cValue.quantity)
          );
        },
        0
      );

      state.priceData.totalPrice =
        state.priceData.totalOriginalPrice - state.priceData.totalDiscountPrice;
    },
  },
});

export default CartSlice.reducer;

export const {
  setCartProduct,
  incrementProductQuantity,
  decrementProductQuantity,
  removeProduct,
  setTotalPrice,
  setRemovePopUp,
  cancelPopUp,
} = CartSlice.actions;
