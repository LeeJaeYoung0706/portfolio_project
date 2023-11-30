import { createSlice } from "@reduxjs/toolkit";

/**
 * Scroll Visible Check
 */

const initialState: TargetInterface = {
    targetId: "",
    visible: true,
};

const targetVisibleSlice = createSlice({
    name: "targetVisible",
    initialState,
    reducers: {
        setTargetVisible: (state, action) => {
            state.targetId = action.payload.targetId;
            state.visible = action.payload.visible;
        },
    },
});

export const { setTargetVisible } = targetVisibleSlice.actions;

export default targetVisibleSlice.reducer;