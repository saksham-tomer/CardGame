import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const updateScoreSlice = createSlice({
  name: "updateScore",
  initialState,
  reducers: {
    updateScore: (state, action) => {
      state.score = action.payload;
    },
  },
});

export default updateScoreSlice.reducer;
export const { updateScore } = updateScoreSlice.actions;
