import { createSlice } from "@reduxjs/toolkit";

/**
 * Scroll Visible Check
 */

const initialState: {checked: boolean} = {
    checked: false,
};

const menuOpenCheckSlice = createSlice({
    name: "menuOpenCheck",
    initialState,
    reducers: {
        setMenuOpenCheck: (state, action) => {
            state.checked = action.payload.checked;
        },
    },
});

export const { setMenuOpenCheck } = menuOpenCheckSlice.actions;

export default menuOpenCheckSlice.reducer;