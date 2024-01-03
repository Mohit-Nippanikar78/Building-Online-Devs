import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { NavbarSlice } from "./Navbar";
import { store } from "./store";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: null,
  },
  reducers: {
    setUser: (state, action) => {
      let data = { name: "Mohit Nippaniakar" };
      state.userData = data;
      localStorage.setItem("userInfo", JSON.stringify(data));
      window.location = "/";
    },
    removeUser: (state, action) => {
      state.userData = null;
      localStorage.removeItem("userInfo");
      window.location = "/";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(checkLocalUser.fulfilled, (state, action) => {
      state.userData = action.payload;
    });
  },
});
export const checkLocalUser = createAsyncThunk(
  "user/checkLocalUser",
  async () => {
    let obj = localStorage.getItem("userInfo");
    if (obj !== null) {
      return JSON.parse(obj);
    } else {
      return null;
    }
    return userInfo;
  }
);
// export const setUserInfo = (res) => {
//     localStorage.setItem(
//       "userInfo",
//       JSON.stringify({ _id: res._id, class: res.class })
//     );
//   };
//   export const userInfo = async () => {
//     let obj = localStorage.getItem("userInfo");
//     let userInfo = JSON.parse(obj);
//     return userInfo;
//   };

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
