import { createSlice } from "@reduxjs/toolkit";
//import avatarTypes from "../components/AvatarTypes";

const initialState = {
  userName: "",
  userAvatar: "",
};

const addUserSlice = createSlice({
  name: "newUser",
  initialState,
  reducers: {
    addUser: (state, action) => {
      return {
        ...state,
        userName: action.payload.userName,
      };
    },
    addUserAvatar: (state, action) => {
      return {
        ...state,
        userAvatar: action.payload.userAvatar,
      };
    },
  },
});

export default addUserSlice.reducer;
export const { addUser, addUserAvatar } = addUserSlice.actions;
