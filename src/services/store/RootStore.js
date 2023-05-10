import { configureStore } from "@reduxjs/toolkit";
import UsersReducer from "./features/UsersSlice";

export default configureStore({
  reducer: {
    users: UsersReducer,
  },
});
