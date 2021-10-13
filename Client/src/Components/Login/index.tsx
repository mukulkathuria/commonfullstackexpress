import React, { lazy, memo, Suspense } from 'react';
import Loader from '../Loader';
import { FlexDiv, FormDiv, FormHeading } from './Style';

const SignInForm = lazy(() => import('./LoginForm'));

const Login = memo(() => {
  return (
    <FlexDiv>
      <FormDiv>
        <FormHeading>
          <h2>Login to your Account</h2>
        </FormHeading>
        <Suspense fallback={<Loader />}>
          <SignInForm />
        </Suspense>
      </FormDiv>
    </FlexDiv>
  );
});

export default Login;
