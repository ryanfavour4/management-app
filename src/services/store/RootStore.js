import { configureStore } from "@reduxjs/toolkit";
import UsersReducer from "./features/UsersSlice";
import DevelopersReducer from "./features/DevelopersSlice";

export default configureStore({
  reducer: {
    users: UsersReducer,
    developers: DevelopersReducer,
  },
});
