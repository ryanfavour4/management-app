import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const USERS_API = process.env.REACT_APP_USERS_API;

// ? FETCH USERS
export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const response = await fetch(USERS_API);
  return response.json();
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
  executeReducers: (builder) => {
    builder.addCase(getUsers.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.users = action.payload;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action;
    });
  },
});

export default userSlice.reducer;
