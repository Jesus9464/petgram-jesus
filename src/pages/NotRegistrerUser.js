import React from "react";
import Context from "../Context";
import { UserForm } from "../components/UserForm/index";
import { RegisterMutation } from "../container/RegistrerMutation";

export const NotRegistrerUser = () => {
  return (
    <Context.Consumer>
      {({ activateAuth }) => {
        return (
          <>
            <RegisterMutation>
              {(register) => {
                const onSubmit = ({ email, password }) => {
                  const input = { email, password };
                  const variables = { input };
                  register({ variables }).then(activateAuth);
                };
                return <UserForm onSubmit={onSubmit} title="Registrarse" />;
              }}
            </RegisterMutation>

            <UserForm onSubmit={activateAuth} title="Iniciar Sesion" />
          </>
        );
      }}
    </Context.Consumer>
  );
};
