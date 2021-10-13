import React from "react";
import { Field, ErrorMessage } from "formik";
import { InputGroup, InputDiv } from "./Style";

type InputProps = {
  name: string;
  as?: string;
};
const Inputs: React.FC<InputProps> = ({ name, ...rest }) => {
  return (
    <InputGroup>
      <InputDiv>
        <Field name={name} {...rest} />
        <ErrorMessage name={name} />
      </InputDiv>
    </InputGroup>
  );
};
export default Inputs;
