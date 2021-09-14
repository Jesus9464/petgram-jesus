import React, { useContext } from "react";
import { Redirect, Router } from "@reach/router";
import Logo from "./components/Logo";
import { GlobalStyle } from "./style/GlobalStyle";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { NavBar } from "./components/NavBar";
import { Favs } from "./pages/Favs";
import { User } from "./pages/User";
import { NotRegistrerUser } from "./pages/NotRegistrerUser";
import { Context } from "./Context";
import { NotFound } from "./pages/NotFound";

export const App = () => {
  const { isAuth } = useContext(Context);
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/detail/:detailsUrlId" />
        {!isAuth && <NotRegistrerUser path="/login" />}
        {!isAuth && <Redirect from="/favs" to="/login" />}
        {!isAuth && <Redirect from="/user" to="/login" />}
        {isAuth && <Redirect from="/login" to="/" />}
        <Favs path="/favs" />
        <User path="/user" />
      </Router>
      <NavBar />
    </>
  );
};
