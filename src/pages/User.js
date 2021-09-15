import React, { useContext } from "react";
import { Context } from "../Context";
import { SubmitButton } from "../components/SudmitButton";

export default () => {
  const { removeAuth } = useContext(Context);
  return (
    <>
      <h1>User</h1>
      <SubmitButton onClick={removeAuth}>Cerrar sesion</SubmitButton>
    </>
  );
};
