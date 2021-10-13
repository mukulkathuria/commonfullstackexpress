export type initials = {
  email: string;
  password: string;
};

export const initialValues: initials = {
  email: "",
  password: "",
};

type errorType = {
  email?: string;
  password?: string;
};

export const validate: (values: initials) => errorType = (values: initials) => {
  const error: errorType = {};
  if (!values.email) {
    error.email = "Please specify valid email";
  }
  if (!values.password) {
    error.password = "Password field cant be empty";
  } else if (values.password.length <= 3) {
    error.password = "Password length cant be less than 3 char";
  }
  return error;
};
