import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

export const SignSlice = createSlice({
    name: "Sign",
    initialState,
    reducers: {
        setPageToggle: (state, action: PayloadAction<boolean>) => {
            state.pageToggle = action.payload;
        },
    },
})

export const { setPageToggle } = SignSlice.actions;
export default SignSlice.reducer;