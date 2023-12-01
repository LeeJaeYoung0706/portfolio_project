import {DefaultTheme} from "styled-components";
import {customMediaQuery} from "@/style/theme/common";

/**
 * 녹색 계열 테마
 */
export const green: DefaultTheme = {
    palette: {
        primary: 'var(--green-primary)',
        second: 'var(--green-second)',
        middle: 'var(--green-middle)',
        reverseSecond: 'var(--green-reverse-second)',
        reverse: 'var(--green-reverse)',
    },
    media: {
        pc: customMediaQuery(1440),
        tablet: customMediaQuery(1366),
        mobile: customMediaQuery(767),
    },
}

