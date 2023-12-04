import { configureStore } from "@reduxjs/toolkit";
import detailSlice from "./Slices/detailSlice";

export const store = configureStore({
  reducer: {
    details: detailSlice,
  },
});
