import { configureStore } from "@reduxjs/toolkit";
import register from "../reducers/registrationSlice";

export default configureStore({
  reducer: {
    register,
  },
});
