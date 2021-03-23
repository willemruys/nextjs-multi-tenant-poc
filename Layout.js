import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
export default function Layout({ children, host }) {
  const lightTheme = {
    body: "#FFF",
    text: "#363537",
    toggleBorder: "#FFF",
    background: "#363537",
  };

  const darkTheme = {
    body: "#363537",
    text: "#FAFAFA",
    toggleBorder: "#6B8096",
    background: "#999",
  };

  let activeTheme = lightTheme;
  if (host.split(".")[0] === "dark") {
    activeTheme = darkTheme;
  }

  const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
`;

  return (
    <ThemeProvider theme={activeTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
