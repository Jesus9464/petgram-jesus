import React from "react";
import { PhotoCard } from "../components/PhotoCard/index";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import ClockLoader from "react-spinners/ClockLoader";

const GET_SINGLE_PHOTO = gql`
  query getSinglePhotos($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

const renderProp = ({ loading, error, data = { photo: {} } }) => {
  if (loading) return <ClockLoader />;
  if (error) return <p>Error!</p>;
  const { photo = {} } = data;
  return <PhotoCard {...photo} />;
};

export const PhotoCardWithQuery = ({ id }) => {
  return (
    <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
      {renderProp}
    </Query>
  );
};
