import { checkString } from "../../../Utils/Validations";

const passRegx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
const emailRegx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export type registerTypes = {
  name: string;
  email: string;
  password: string;
};

export const initialValues: registerTypes = {
  name: "",
  email: "",
  password: "",
};

type registererrors = {
  name?: string;
  email?: string;
  password?: string;
};

export const validate: (values: registerTypes) => registererrors = (values) => {
  const error: registererrors = {};
  if (!values.name) {
    error.name = "Please specify name";
  } else if (checkString(values.name)) {
    error.name = "Please specify valid name";
  }
  if (!values.email) {
    error.email = "Please specify email address";
  } else if (!emailRegx.test(values.email)) {
    error.email = "Please specify valid email";
  }
  if (!values.password) {
    error.password = "Please specify password";
  } else if (!passRegx.test(values.password)) {
    error.password = "Please specify valid password";
  }
  return error;
};
