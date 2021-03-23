import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themeConfig";

export default function Layout({ children, host }) {
  let activeTheme = lightTheme;
  if (host.split(".")[0] === "dark") {
    activeTheme = darkTheme;
  }
  return (
    <ThemeProvider theme={activeTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
