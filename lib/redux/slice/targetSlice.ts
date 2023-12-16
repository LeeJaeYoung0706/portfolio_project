import { createSlice } from "@reduxjs/toolkit";


interface VisibilityConfig {
    visible: boolean;
}

interface StateInterface {
    about_me: VisibilityConfig;
    stack: VisibilityConfig;
    project: VisibilityConfig;
}
/**
 * Scroll Visible Check
 */
const initialState: StateInterface = {
    about_me: {
        visible: false,
    },
    stack: {
        visible: false
    },
    project: {
        visible: false,
    },
};

/**
 * 타이틀 인식 시 공통으로 사용하려고 생성
 */
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