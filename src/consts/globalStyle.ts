import { createGlobalStyle } from 'styled-components';

export const GlobalFontStyle = createGlobalStyle`
  /*
   * ====================
   *   GLOBAL FONT FACE
   * ====================
   */
  @font-face {
    font-family: 'Thin';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Thin.woff') format('woff');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'ExtraLight';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-ExtraLight.woff') format('woff');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'Light';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Medium';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'SemiBold';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Bold';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'ExtraBold';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-ExtraBold.woff') format('woff');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Heavy';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
  }
`;

export const GlobalColorStyle = createGlobalStyle`
  :root {
    // ? Color Palette
    --color-white: #fff;
    --color-black: #000;
    --color-red: #ff0000;
    --color-green: #00ff00;
    --color-blue: #0000ff;
    --color-midnight: #302e41;
    --color-midnight-purple: #342048;

    --color-gray-0: #f8f9fa;
    --color-gray-1: #f1f3f5;
    --color-gray-2: #e9ecef;
    --color-gray-3: #dee2e6;
    --color-gray-4: #ced4da;
    --color-gray-5: #adb5bd;
    --color-gray-6: #868e96;
    --color-gray-7: #495057;
    --color-gray-8: #343a40;
    --color-gray-9: #212529;

    --color-skeleton: #A5A5A54D;
    --color-skeleton-dark: #A5A5A580;

    --border-radius-default: calc(4rem / 16);
    
    --space-default: calc(16rem / 16);

    --gap-default: calc(1rem / 16);

    --icon-size-lg: calc(24rem / 16);
    --icon-size-default: calc(20rem / 16);
    --icon-size-sm: calc(16rem / 16);
    --icon-size-xs: calc(12rem / 16);
  }

  .darkmode {
    --color-gray-0: #212529;
    --color-gray-1: #343a40;
    --color-gray-2: #495057;
    --color-gray-3: #868e96;
    --color-gray-4: #adb5bd;
    --color-gray-5: #ced4da;
    --color-gray-6: #dee2e6;
    --color-gray-7: #e9ecef;
    --color-gray-8: #f1f3f5;
    --color-gray-9: #f8f9fa;
  }

  @media (prefers-color-scheme: dark) {
    .darkmode {
      --color-gray-0: #212529;
      --color-gray-1: #343a40;
      --color-gray-2: #495057;
      --color-gray-3: #868e96;
      --color-gray-4: #adb5bd;
      --color-gray-5: #ced4da;
      --color-gray-6: #dee2e6;
      --color-gray-7: #e9ecef;
      --color-gray-8: #f1f3f5;
      --color-gray-9: #f8f9fa;
    }
  }
`;

export const GlobalCommonStyle = createGlobalStyle`
  html, body {
    width: 100%;
    min-width: 100%;
    height: 100%;
    font-family: 'Thin', 'ExtraLight', 'Light', 'Regular', 'Medium', 'SemiBold', 'Bold', 'ExtraBold', 'Heavy';
    background-color: var(--color-gray-0);
    color: var(--color-default);
    margin: 0;
    padding: 0;

    /* Disabled Draggable */
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
  }

  div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p,
  blockquote, pre, a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong,
  sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend, table, caption, tbody, tfoot,
  thead, tr, th, td, article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup, menu, nav, output,
  ruby, section, summary, time, mark, audio, video {
    color: var(--color-gray-9);
    font-family: 'Regular';
    user-select: none;
    /* scroll bar invisible */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  /* scroll bar invisible */
  *::-webkit-scrollbar {
    display: none;  /* Safari and Chrome */
  }

  *, *::after, *::before {
    color: var(--color-gray-9);
    font-family: 'Regular';
    box-sizing: border-box;
  }

  a { 
    text-decoration: none;
    color: var(--color-gray-9);
  }
  
  ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  button {
    border: none;
    background-color: transparent;
    margin: 0;
    padding: 0;
  }

  button, a, input[type=button], input[type=submit] {
    cursor: pointer;
  }

  svg {
    width: var(--icon-size-default);
    height: var(--icon-size-default);
  }

  label {
    user-select: none;
  }

  button:focus, select:focus, select:active, button:active, input:active, input:focus {
    outline: none !important;
  }

  input {
    border: none !important;
    background-color: var(--color-white);
    color: var(--color-gray-9);
    border-radius: var(--border-radius-default);
  }

  input::placeholder {
    color: var(--color-gray-3);
  }

  /*
   * =====================
   *     HEADING STYLE
   * =====================
   */
  h1, h2, h3 {
    letter-spacing: calc(-0.4rem / 16);
  }

  h4, h5, h6, p {
    letter-spacing: calc(-0.2rem / 16);
  }

  .h0 {
    font-size: calc(50rem / 16);
    line-height: calc(64rem / 16);
  }

  h1 {
    font-size: calc(38rem / 16);
    line-height: calc(49rem / 16);
  }

  h2 {
    font-size: calc(28rem / 16);
    line-height: calc(36rem / 16);
  }

  h3 {
    font-size: calc(22rem / 16);
    line-height: calc(33rem / 16);
  }

  h4 {
    font-size: calc(22rem / 16);
    line-height: calc(33rem / 16);
  }

  h5 {
    font-size: calc(16rem /16);
    line-height: calc(24rem / 16);
  }

  h6 {
    font-size: calc(14rem / 16);
    line-height: calc(21rem / 16);
  }

  p {
    font-size: calc(12rem / 16);
    line-height: calc(18rem / 16);
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: calc(32rem / 16);
      line-height: calc(38rem / 16);
    }

    h2 {
      font-size: calc(24rem / 16);
      line-height: calc(34rem / 16);
    }

    h3 {
      font-size: calc(21rem / 16);
      line-height: calc(30rem / 16);
    }
  }
`;
