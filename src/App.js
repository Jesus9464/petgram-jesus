import React from "react";
import { ListOfCategories } from "./components/ListOfCategories/index";
import { GlobalStyle } from "./style/GlobalStyle";
import { ListOfPhotoCard } from "./components/ListOfPhotoCard/index";
import Logo from "./components/Logo";

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCard />
    </div>
  );
};
