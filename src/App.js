import React, { useContext, Suspense } from "react";
import { Redirect, Router } from "@reach/router";
import Logo from "./components/Logo";
import { GlobalStyle } from "./style/GlobalStyle";
import { NavBar } from "./components/NavBar";
import { Context } from "./Context";
import { NotFound } from "./pages/NotFound";

const Favs = React.lazy(() => import("./pages/Favs"));
const Home = React.lazy(() => import("./pages/Home"));
const User = React.lazy(() => import("./pages/User"));
const Detail = React.lazy(() => import("./pages/Detail"));
const NotRegistrerUser = React.lazy(() => import("./pages/NotRegistrerUser"));

export const App = () => {
  const { isAuth } = useContext(Context);
  return (
    <Suspense fallback={<div />}>
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
    </Suspense>
  );
};
