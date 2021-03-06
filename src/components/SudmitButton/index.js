import React from "react";
import { Button } from "./style";
import PropTypes from "prop-types";

export const SubmitButton = ({ children, disabled, onClick }) => {
  return (
    <Button disabled={disabled} onClick={onClick}>
      {children}
    </Button>
  );
};

SubmitButton.proptypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};
