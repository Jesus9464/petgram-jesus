import React from "react";
import { GetFavorite } from "../container/GetFavorite";
import { Helmet } from "react-helmet";
import { Layout } from "../components/Layout";

export default () => {
  return (
    <Layout
      title="Tus favoritos"
      subtitle="Aqui puedes encontrar tus favoritos"
    >
      <GetFavorite />
    </Layout>
  );
};
