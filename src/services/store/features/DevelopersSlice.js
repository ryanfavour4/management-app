import { createSlice } from "@reduxjs/toolkit";
import developersList from "../../db/developers.json";

const initialState = {
  developers: developersList,
  count: 0,
};

const DevelopersSlice = createSlice({
  name: "Developers",
  initialState,
  reducers: {
    plusCount: function (state) {
      state.count += 1;
    },
    minusCount: function (state) {
      state.count -= 1;
    },
    removeDeveloper: function (state, action) {
      const newDevs = state.developers.filter(
        (developer) => developer.id !== action.payload
      );
      state.developers = newDevs;
    },
  },
});

export const { plusCount, minusCount, removeDeveloper } = DevelopersSlice.actions;
export default DevelopersSlice.reducer;
