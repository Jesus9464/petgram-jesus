import React from "react";
import { GetFavorite } from "../container/GetFavorite";
import { Helmet } from "react-helmet";
import { Layout } from "../components/Layout";

export const Favs = () => {
  return (
    <Layout
      title="Tus favoritos"
      subtitle="Aqui puedes encontrar tus favoritos"
    >
      <GetFavorite />
    </Layout>
  );
};
