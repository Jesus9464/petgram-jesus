import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import ClockLoader from "react-spinners/ClockLoader";
import { ListOfFavs } from "../components/ListOfFavs/index";

const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;

const renderProp = ({ data, loading, error }) => {
  if (loading) return <ClockLoader />;
  if (error) return <h1>Error de Carga</h1>;
  const { favs } = data;

  return <ListOfFavs favs={favs} />;
};

export const GetFavorite = () => {
  return (
    <Query query={GET_FAVS} fetchPolicy="network-only">
      {renderProp}
    </Query>
  );
};
