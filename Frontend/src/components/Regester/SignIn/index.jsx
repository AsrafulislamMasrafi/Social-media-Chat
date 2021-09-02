import React, { Component } from "react";
import { A, P } from "../../../style/Button.style";
import { Heading } from "../../../style/Tag.style";
import Regester from './Step';
export class SingINForm extends Component {
  render() {
    return (
      <>
        <Heading>Sign in now</Heading>
        <Regester />
        <P>
        Do You Have An Account ? <A href="g">Login</A>
        </P>
      </>
    );
  }
}

export default SingINForm;
