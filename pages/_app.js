import React from "react";

import "../styles/global.css";
import "tailwindcss/tailwind.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../ThemeConfig";
import { getTenantData } from "../services/tenant";

function App({ Component, pageProps }) {
  const themes = {
    lightTheme: {
      body: "#FFF",
      text: "#363537",
      toggleBorder: "#FFF",
      background: "#363537",
      button: "green",
    },

    basic: {
      body: "#FFF",
      text: "#363537",
      toggleBorder: "#FFF",
      background: "#363537",
      button: "yellow",
    },

    darkTheme: {
      body: "#363537",
      text: "#FAFAFA",
      toggleBorder: "#6B8096",
      background: "#999",
      button: "red",
    },
  };

  return (
    <ThemeProvider theme={themes[pageProps.theme]}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  const tenant = ctx.req.rawHeaders[1].split(".")[0];

  const tenantData = await getTenantData(tenant);
  const theme =
    tenantData && tenantData.styling && tenantData.styling.colorPalette
      ? tenantData.styling.colorPalette
      : "darkTheme";

  pageProps.tenant = tenant;
  pageProps.theme = theme;
  return {
    pageProps: {
      ...pageProps,
    },
  };
};
export default App;
