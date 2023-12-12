import { createGlobalStyle } from 'styled-components';
import { reset } from '@/style/mixin';
import {dark} from "@/style/theme/dark";


export const GlobalStyle = createGlobalStyle`

    :root {
        --purple-primary: hsl(0, 100%, 0%);
        --purple-primary-70: hsl(243, 54%, 16%, 85%);
        --purple-second: hsl(241, 89%, 29%);
        --purple-second-70: hsl(248, 52%, 23%, 85%);
        --purple-middle: hsl(238, 100%, 57%);
        --purple-middle-70: hsl(253, 33%, 78%, 85%);
        --purple-reverse-second: hsl(235, 100%, 73%);
        --purple-reverse-second-70: hsl(274, 35%, 92%, 85%);
        --purple-reverse: hsl(309, 100%, 99%);
        --purple-reverse-70: hsl(270, 64%, 40%, 85%);


        --dark-primary: hsl(0, 0%, 94%);
        --dark-second: hsl(28, 86%, 64%);
        --dark-middle: hsl(22, 50%, 43%);
        --dark-reverse-second: hsl(22, 50%, 23%);
        --dark-reverse: hsl(0, 0%, 5%);

        --dark-primary-70: hsl(0, 0%, 94%, 85%);
        --dark-second-70: hsl(28, 86%, 64%, 85%);
        --dark-middle-70: hsl(22, 50%, 43%, 85%);
        --dark-reverse-second-70: hsl(22, 50%, 23%, 85%);
        --dark-reverse-70: hsl(0, 0%, 5%, 85%);


        --white: hsl(0, 100%, 100%);
        --black: hsl(0, 100%, 0%);
        --white-70: hsl(0, 0%, 84%);
        --black-70: hsl(240, 1%, 35%);
    }

    *,
    :before,
    :after {
        ${reset};
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        font-weight: 400;
        font-size: 16px;
        line-height: 1.5;
        height: 100%;
        -webkit-text-size-adjust: 100%;
        min-width: 375px;

        &.is-mobile {
            font-size: 12px;
        }

        &.is-scroll-lock {
            overflow: hidden;
        }
    }

    ol,
    ul {
        list-style: none;
    }

    table {
        width: 100%;
        border-spacing: 0;
        table-layout: fixed;
    }

    th,
    td {
        text-align: center;
        vertical-align: middle;
    }

    a {
        text-decoration: none;
    }

    button {
        border: none;
        border-radius: 0;
        background: none;
        appearance: none;
        cursor: pointer;
    }
`;