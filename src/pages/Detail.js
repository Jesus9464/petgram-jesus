import React from "react";
import { PhotoCardWithQuery } from "../container/PhotoCardWithQuery";
import { Layout } from "../components/Layout";

export const Detail = ({ detailsUrlId }) => {
  return (
    <Layout title={`Fotografia ${detailsUrlId}`}>
      <PhotoCardWithQuery id={detailsUrlId} />
    </Layout>
  );
};
