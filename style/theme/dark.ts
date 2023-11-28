import {css, DefaultTheme} from "styled-components";
import {customMediaQuery} from "@/style/theme/common";


export const dark: DefaultTheme = {
    palette: {
        main: 'var(--black)',
        main70: 'var(--black-70)',
        main90: 'var(--black-90)',
        mainReverse: 'var(--white)',
        mainReverse70: 'var(--white-70)',
        boxShadow: '0 0 10px 2px var(--black), 0 0 10px 4px hsl(28, 87%, 67% , 57%);',
        hoverBoxShadow: '0 0 5px 2px var(--white), 0 0 10px 4px hsl(28, 87%, 67% , 57%);',
        boxShadowInset: 'inset 0 0 3px 2px hsl(28, 87%, 67% , 57%), 0 0 1px 2px hsl(28, 87%, 67% , 57%);',
        fontColor: 'var(--main-70)',
        fontColorHover: 'var(--main-100)',
    },
    media: {
        pc: customMediaQuery(1440),
        tablet: customMediaQuery(1366),
        mobile: customMediaQuery(767),
    },
}

