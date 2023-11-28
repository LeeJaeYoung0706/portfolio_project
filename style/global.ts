import { createGlobalStyle } from 'styled-components';
import { reset } from '@/style/mixin';


export const GlobalStyle = createGlobalStyle`

  :root {
    --base-white: 0, 100%;
    --base-black: 0, 100%;
    --white: hsl(0, 100%, 100%);
    --black: hsl(0, 100%, 0%);
    --black-70: hsl(var(--base-black), 0% , 70%);
    --white-70: hsl(var(--base-white), 100%, 70%);
    --black-90: hsl(var(--black), 0% , 90%);
    --white-90: hsl(var(--white), 100%, 90%);
    
    --main-70: hsl(28, 87%, 67% , 70%);
    --main-100: hsl(28, 87%, 67% , 100%);
    
    --base-gray: hsl(var(--base-black), 25%);
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
    min-width: 500px;

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