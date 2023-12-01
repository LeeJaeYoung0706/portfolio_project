import { createSlice } from "@reduxjs/toolkit";


interface VisibleInterface {
    visible: boolean
}

interface StateInterface {
    [key: string]: VisibleInterface
}
/**
 * Scroll Visible Check
 */

const initialState: StateInterface = {
    about_me: {
        visible: false,
    },
    stack: {
        visible: false,
    },
    project: {
        visible: false,
    },
};

const targetVisibleSlice = createSlice({
    name: "targetVisible",
    initialState,
    reducers: {
        setAboutVisible: (state, action) => {
            state.about_me = action.payload;
        },
        setStackVisible: (state, action) => {
            state.stack = action.payload;
        },
        setProjectVisible: (state, action) => {
            state.project = action.payload;
        },
    },
});

export const { setAboutVisible , setStackVisible , setProjectVisible } = targetVisibleSlice.actions;

export default targetVisibleSlice.reducer;