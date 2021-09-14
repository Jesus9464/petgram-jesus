import React, { Fragment } from "react";
import { ListOfCategories } from "../components/ListOfCategories/index";
import { ListOfPhotoCard } from "../container/ListOfPhotoCard";
import { Layout } from "../components/Layout/index";

export const Home = ({ id }) => {
  return (
    <Layout
      title="Tu app de fotos de mascotas"
      subtitle="Con Petgram puedes encontrar fotos de animales domesticos muy bonitos"
    >
      <ListOfCategories />
      <ListOfPhotoCard categoryId={id} />
    </Layout>
  );
};
