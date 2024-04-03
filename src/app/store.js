import { configureStore } from "@reduxjs/toolkit";
import addUserReducer from "../slice/AddUserSlice";
import updateScoreReducer from "../slice/UpdateScoreSlice";

export const store = configureStore({
  reducer: {
    newUser: addUserReducer,
    updateScore: updateScoreReducer,
  },
});
