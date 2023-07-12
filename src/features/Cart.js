import { createSlice } from "@reduxjs/toolkit";

let cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    paymentSuccess: true,
  },
  reducers: {
    setPaymentSuccess: (state, action) => {
      state.paymentSuccess = action.payload;
    },
  },
});
const { setPaymentSuccess } = cartSlice.actions;
export default cartSlice.reducer;
