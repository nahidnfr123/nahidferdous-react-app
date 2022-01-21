import {createGlobalStyle} from "styled-components";

export const lightTheme = {
    bodyColor: "#eae7e7",
    textColor: "#040a13",
    linkColor: "red"
}

export const darkTheme = {
    bodyColor: "#040a13",
    textColor: "#fff",
    linkColor: "blue"
}

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(theme) => theme.theme.bodyColor};
    color: ${(theme) => theme.theme.textColor};
    transition: all 0.5ms ease-in-out;
  }

  .anchor-link {
    transition: all 0.5ms ease-in-out;
    color: ${(theme) => theme.theme.linkColor};
  }
`


