import React from "react";
import { PhotoCardWithQuery } from "../container/PhotoCardWithQuery";
import { Layout } from "../components/Layout";

export default ({ detailsUrlId }) => {
  return (
    <Layout title={`Fotografia ${detailsUrlId}`}>
      <PhotoCardWithQuery id={detailsUrlId} />
    </Layout>
  );
};
