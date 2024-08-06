import { configureStore } from "@reduxjs/toolkit";
import boostSlice from "../slice/boostSlice";

export default configureStore({
  reducer: {
    boost: boostSlice,
  },
});
