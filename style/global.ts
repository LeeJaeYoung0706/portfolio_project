import { createGlobalStyle } from 'styled-components';
import { reset } from '@/style/mixin';


export const GlobalStyle = createGlobalStyle`

  :root {

    //Purple

    //--purple-primary: hsl(268, 46%, 16%);
    //--purple-second: hsl(304, 42%, 27%);
    //--purple-middle: hsl(187, 39%, 37%);
    //--purple-reverse-second: hsl(40, 74%, 72%);
    //--purple-reverse: hsl(31, 50%, 58%);

    --purple-primary: hsl(231, 32%, 28%);
    --purple-second: hsl(248, 49%, 35%);
    --purple-middle: hsl(29, 71%, 83%);
    --purple-reverse-second: hsl(197, 83%, 71%);
    --purple-reverse: hsl(208, 37%, 60%);

    //Greean
    --green-primary: hsl(28, 21%, 56%);
    --green-second: hsl(202, 59%, 13%);
    --green-middle: hsl(57, 29%, 65%);
    --green-reverse-second: hsl(145, 25%, 80%);
    --green-reverse: hsl(186, 20%, 29%);


    --white: hsl(0, 100%, 100%);
    --black: hsl(0, 100%, 0%);

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