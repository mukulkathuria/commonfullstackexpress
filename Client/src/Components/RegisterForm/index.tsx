import React, { memo } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { Formik, Form, FormikHelpers } from "formik";
import FormControl from "../FormControl";
import { registerTypes, initialValues, validate } from "./Controls";

const SignUpForm = memo(() => {
  const history = useHistory();

  const onSubmitting = async (
    values: registerTypes,
    submitprops: FormikHelpers<registerTypes>
  ) => {
    try {
      const { getRegister } = await import('../../Services/Register');
      await getRegister(values);
      history.push("/");
    } catch (err:any) {
      submitprops.setSubmitting(false);
      if (!err.response) {
        submitprops.resetForm();
      }
      submitprops.setFieldError("email", err.response.data.message);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmitting}
    >
      {(formik) => (
        <Form>
          <FormControl
            control="input"
            name="name"
            type="text"
            placeholder="Name"
          />
          <FormControl
            control="input"
            name="email"
            type="email"
            placeholder="Email"
            autoComplete="new-password"
          />
          <FormControl
            control="input"
            name="password"
            type="password"
            placeholder="Password"
          />
          <div className="small">
            Make sure it's at least 15 characters OR at least 8 characters
            including a number and a lowercase letter
          </div>
          <button
            type="submit"
            disabled={!formik.isValid || formik.isSubmitting}
          >
            {formik.isSubmitting ? "Signing Up..." : "Sign up"}
          </button>
        </Form>
      )}
    </Formik>
  );
});
export default withRouter(SignUpForm);
