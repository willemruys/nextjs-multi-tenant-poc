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
    <ThemeProvider
      theme={
        pageProps && pageProps.theme ? themes[pageProps.theme] : themes.basic
      }
    >
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
  let tenant;

  if (ctx && ctx.req && ctx.req.host) {
    tenant = ctx.req.host.split(".")[0];
  }

  if (!tenant) {
    return {
      redirect: {
        permanent: false,
        destination: "/500",
      },
    };
  }

  const tenantData = await getTenantData(tenant);

  if (!tenantData) {
    return {
      redirect: {
        permanent: false,
        destination: "/500",
      },
    };
  }
  const theme =
    tenantData && tenantData.styling && tenantData.styling.colorPalette
      ? tenantData.styling.colorPalette
      : "darkTheme";

  if (theme) {
    pageProps.theme = theme;
  }

  if (tenant) {
    pageProps.tenant = tenant;
  }

  return {
    pageProps: {
      ...pageProps,
    },
  };
};
export default App;
