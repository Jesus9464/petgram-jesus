import React from "react";
import { Nav, Link } from "./style";
import { MdHome, MdFavoriteBorder, MdPermIdentity } from "react-icons/md";

export const NavBar = () => {
  return (
    <Nav>
      <Link to="/">
        <MdHome size="30px" />
      </Link>
      <Link to="/favs">
        <MdFavoriteBorder size="30px" />
      </Link>
      <Link to="/user">
        <MdPermIdentity size="30px" />
      </Link>
    </Nav>
  );
};
