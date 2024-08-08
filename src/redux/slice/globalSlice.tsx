import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  loginModal: false,
};

// Then, handle actions in your reducers:
const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setLoginModal: (state: any, action: PayloadAction<any>) => {
      state.loginModal = action.payload;
    },
  },
});

export const { setLoginModal } = globalSlice.actions;

export default globalSlice.reducer;
