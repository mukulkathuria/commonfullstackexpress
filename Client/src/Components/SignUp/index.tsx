import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Loader';
import { FlexDiv, FormDiv, FormHeading } from './Style';

const RegisterForm = lazy(() => import('../RegisterForm'));

const SignUp: React.FC = React.memo(() => {
  return (
    <FlexDiv>
      <FormDiv>
        <FormHeading>
          <h2>Create an Account</h2>
        </FormHeading>
        <Suspense fallback={<Loader />}>
          <RegisterForm />
        </Suspense>
        <p>
          Already have an Account? <Link to="/">Login</Link>
        </p>
      </FormDiv>
    </FlexDiv>
  );
});

export default SignUp;
