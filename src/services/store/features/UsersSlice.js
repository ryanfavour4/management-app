import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const USERS_API = process.env.REACT_APP_USERS_API;

// ? FETCH USERS
export const getUsers = createAsyncThunk("users/getUsers", async () => {
  return fetch(USERS_API).then((res) => res.json());
});

const initialState = {
  users: [],
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  executeReducers: {
    [getUsers.pending]: (state, action) => {
      state.loading = true;
      state.error = false;
      console.log(action);
    },
    [getUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      console.log(action);
      state.users = action.payload;
    },
    [getUsers.rejected]: (state, action) => {
      state.loading = false;
      state.error = action;
      console.log(action);
    },
  },
});

export default userSlice.reducer;
