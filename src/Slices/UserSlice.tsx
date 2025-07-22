import { createSlice } from "@reduxjs/toolkit";
import { getItem, removeItem, setItem } from "../Services/LocalStorageService";

const UserSlice = createSlice({
  name: "user",
  initialState: getItem("user"),
  reducers: {
    setUser: (state, action) => {
      console.log("before set user : "+getItem("user"));
      setItem("user", action.payload);
      state = getItem("user");
      console.log("after set user : "+getItem("user"));
        return state;
    },
    removeUser: (state) => {
      removeItem("user");
        state = null;
        console.log("after remove user : "+getItem("user"));
        return state;
    },
  }
});

export const { setUser, removeUser } = UserSlice.actions;
export default UserSlice.reducer;