import {css, DefaultTheme} from "styled-components";
import {customMediaQuery} from "@/style/theme/common";

/**
 * 보라 계열 테마
 */
export const purple: DefaultTheme = {
    palette: {
        primary: 'var(--purple-primary)',
        second: 'var(--purple-second)',
        middle: 'var(--purple-middle)',
        reverseSecond: 'var(--purple-reverse-second)',
        reverse: 'var(--purple-reverse)',
    },
    media: {
        pc: customMediaQuery(1440),
        tablet: customMediaQuery(1366),
        mobile: customMediaQuery(767),
    },
}

