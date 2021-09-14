import React from "react";
import { useInputInitialValue } from "../../hooks/useInputInitialValue";
import { Form, Input, Title, Error } from "./style";
import { SubmitButton } from "../SudmitButton/index";

export const UserForm = ({ onSubmit, title, error, disabled }) => {
  const email = useInputInitialValue();
  const password = useInputInitialValue();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      email: email.value,
      password: password.value,
    });
  };

  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input
          disabled={disabled}
          type="email"
          placeholder="Email"
          name="email"
          {...email}
        />
        <Input
          disabled={disabled}
          type="password"
          placeholder="Password"
          name="password"
          {...password}
        />
        <SubmitButton disabled={disabled}>{title}</SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  );
};
