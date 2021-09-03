import React, { Fragment } from "react";
import { ListOfCategories } from "../components/ListOfCategories/index";
import { ListOfPhotoCard } from "../container/ListOfPhotoCard";

export const Home = ({ id }) => {
  return (
    <Fragment>
      <ListOfCategories />
      <ListOfPhotoCard categoryId={id} />
    </Fragment>
  );
};
