import React, { memo } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import { Link, useHistory } from 'react-router-dom';
import FormControl from '../FormControl';
import { initialValues, validate, initials } from './Controls';
import { LoginButtonDiv, StyledButton } from './Style';

const SignInForm = memo(() => {
  const history = useHistory();

  const onSubmitting = async (
    values: initials,
    submitprops: FormikHelpers<initials>
  ) => {
    try {
      const { getLogin } = await import('../../Services/Login');
      await getLogin(values);
      history.push('/');
    } catch (err: any) {
      submitprops.setSubmitting(false);
      if (!err.response) {
        submitprops.resetForm();
      }
      submitprops.setFieldError('email', err.response.data.message);
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
            name="email"
            type="text"
            placeholder="Email"
            autoComplete="new-password"
          />
          <FormControl
            control="input"
            name="password"
            type="password"
            placeholder="Password"
          />
          <LoginButtonDiv className="loginbuttondiv">
            <StyledButton
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              {formik.isSubmitting ? 'Login in..' : 'Log in'}
            </StyledButton>
            <p>
              Don't have an account? <Link to="/signup"> Sign Up</Link>
            </p>
          </LoginButtonDiv>
        </Form>
      )}
    </Formik>
  );
});
export default SignInForm;
