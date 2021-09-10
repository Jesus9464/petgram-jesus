import React from "react";
import { useInputInitialValue } from "../../hooks/useInputInitialValue";
import { Form, Input, Button, Title } from "./style";

export const UserForm = ({ onSubmit, title }) => {
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
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit}>
        <Input type="email" placeholder="Email" name="email" {...email} />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          {...password}
        />
        <Button>{title}</Button>
      </Form>
    </>
  );
};
