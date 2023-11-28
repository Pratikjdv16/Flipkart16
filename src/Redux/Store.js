import { configureStore } from "@reduxjs/toolkit";
import CombineReducers from "../Redux/CombineReducer";

const Store = configureStore({
  reducer: CombineReducers,
});

export default Store;
