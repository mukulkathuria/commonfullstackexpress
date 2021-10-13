import React from "react";
import Inputs from "./inputControl";

type Controlprops = {
  control: string;
  name: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
};

const FormControl: React.FC<Controlprops> = ({ control, name, ...props }) => {
  switch (control) {
    case "input":
      return <Inputs name={name} {...props} />;
    case "textarea":
      return <Inputs name={name} as="textarea" {...props} />;
    default:
      return null;
  }
};
export default FormControl;
