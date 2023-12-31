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

        primary70: 'var(--purple-primary-70)',
        second70: 'var(--purple-second-70)',
        middle70: 'var(--purple-middle-70)',
        reverseSecond70: 'var(--purple-reverse-second-70)',
        reverse70: 'var(--purple-reverse-70)',
        background: 'var(--white)',
        backgroundSecond: 'var(--white-70)'

    },
    media: {
        pc: customMediaQuery(1440),
        tablet: customMediaQuery(1366),
        mobile: customMediaQuery(767),
    },
}

