import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./AppSlice";
const store = configureStore({
  reducer: {
    Application: appSlice,
  },
});
export default store;
