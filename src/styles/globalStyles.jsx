import {createGlobalStyle} from "styled-components";

export const lightTheme = {
    bodyColor: "#e7e5e5",
    textColor: "#040a13",
    linkColor: "#f25129"
}

export const darkTheme = {
    bodyColor: "#040a13",
    textColor: "#fff",
    linkColor: "#efab34"
}

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(theme) => theme.theme.bodyColor};
    color: ${(theme) => theme.theme.textColor};
    transition: all 200ms ease-in-out;
  }

  .anchor-link {
    font-size: 14px;
    font-family: var(--font-mono);
    font-weight: 500;
    transition: all 200ms ease-in-out;
  }

  .anchor-link span {
    padding-right: 4px;
    color: ${(theme) => theme.theme.linkColor};
  }

  .anchor-link:hover {
    color: ${(theme) => theme.theme.linkColor};
  }

  .bordered-button {
    padding: 8px 14px;
    border-radius: 4px;
    background: transparent;
    color: ${(theme) => theme.theme.linkColor};
    border: 1px solid ${(theme) => theme.theme.linkColor};
    transition: all 200ms ease-in-out;
  }

  .bordered-button:hover {
    background-color: ${(theme) => theme.theme.linkColor}40;
  }
`


