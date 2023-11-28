import { combineReducers } from "@reduxjs/toolkit";
import ProductListSlice from "../Redux/Slices/ProductListSlice";
import ProductFilterSlice from "../Redux/Slices/ProductFilterSlice";
import ProductSlice from "../Redux/Slices/ProductSlice";
import SearchFilter from "../Redux/Slices/SearchFilter";
import CartSlice from "./Slices/CartSlice";
import LoginSlice from "./Slices/LoginSlice";
import PaymentSlice from "./Slices/PaymentSlice";

const CombineReducers = combineReducers({
  Slice1: ProductListSlice,
  Slice2: ProductFilterSlice,
  Slice3: ProductSlice,
  Slice4: SearchFilter,
  Slice5: CartSlice,
  Slice6: LoginSlice,
  Slice7: PaymentSlice,
});

export default CombineReducers;
