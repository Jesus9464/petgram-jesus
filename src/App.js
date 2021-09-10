import React from "react";
import { Router } from "@reach/router";
import Logo from "./components/Logo";
import { GlobalStyle } from "./style/GlobalStyle";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { NavBar } from "./components/NavBar";
import { Favs } from "./pages/Favs";
import { User } from "./pages/User";
import { NotRegistrerUser } from "./pages/NotRegistrerUser";
import Context from "./Context";

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/detail/:detailsUrlId" />
      </Router>
      <Context.Consumer>
        {({ isAuth }) => {
          return isAuth ? (
            <Router>
              <Favs path="/favs" />
              <User path="/user" />
            </Router>
          ) : (
            <Router>
              <NotRegistrerUser path="/favs" />
              <NotRegistrerUser path="/user" />
            </Router>
          );
        }}
      </Context.Consumer>
      <NavBar />
    </div>
  );
};
