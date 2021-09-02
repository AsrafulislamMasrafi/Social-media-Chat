import PropTypes from "prop-types";
import React from "react";
import { Button, Icon } from "../../../style/Button.style";
import { Input, Label } from "../../../style/form.style";

export function FormGroup({ id, type, text, handleChange }) {
  return (
    <>
      <Label htmlFor={id}>{text}</Label>
      <Input type={type} id={id} name={id} onChange={handleChange} />
    </>
  );
}

FormGroup.propTypes  = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export function ButtonNext({ icon, text, type, handlaClick }) {
  return (
    <Button type={type} onClick={handlaClick} >
      {text} <Icon className={icon} />
    </Button>
  );
}

ButtonNext.propTypes  = {
  icon: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handlaClick: PropTypes.func.isRequired,
};
