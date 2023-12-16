import { createSlice } from "@reduxjs/toolkit";

/**
 *
 * 생성 이유 : 스크롤 + 메뉴 버튼 눌렀을 경우 사용자 경험을 좋게 하기 위해서 Header 효과를 다시 주기 위한 상태 관리
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