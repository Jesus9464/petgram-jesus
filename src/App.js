import React from "react";
import { ListOfCategories } from "./components/ListOfCategories/index";
import { GlobalStyle } from "./style/GlobalStyle";
import { ListOfPhotoCard } from "./container/ListOfPhotoCard";
import Logo from "./components/Logo";

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCard categoryId={2} />
    </div>
  );
};
