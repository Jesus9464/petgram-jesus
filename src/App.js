import React from "react";
import { GlobalStyle } from "./style/GlobalStyle";
import Logo from "./components/Logo";
import { PhotoCardWithQuery } from "../src/container/PhotoCardWithQuery";
import { Home } from "./pages/Home";
import { Router } from "@reach/router";

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailsUrlId = urlParams.get("detail");

  return (
    <div>
      <GlobalStyle />
      <Logo />
      {detailsUrlId ? (
        <PhotoCardWithQuery id={detailsUrlId} />
      ) : (
        <Router>
          <Home path="/" />
          <Home path="/pet/:id" />
        </Router>
      )}
    </div>
  );
};
