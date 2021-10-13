import React, { lazy, memo, Suspense, useState } from 'react';
import { Header, DivContainer, Logo, Userinfo, Icons } from './Style';
import { Link } from 'react-router-dom';
import Loader from '../Loader';

const { default: Avatar } = require('../../Assets/images/avatar.png');
const UserDetails = lazy(() => import('./UserDetails'));
const HomePage = memo(() => {
  const [showAcc, hideAcc] = useState(() => false);

  return (
    <Header>
      <DivContainer>
        <Logo>
          <Link to="/">
            <img src="" alt="logo" />
          </Link>
        </Logo>
        <Icons>
          <Userinfo onClick={() => hideAcc(!showAcc)}>
            <img src={Avatar} alt="avatar" />
            <Suspense fallback={<Loader />}>
              {showAcc && <UserDetails />}
            </Suspense>
          </Userinfo>
        </Icons>
      </DivContainer>
    </Header>
  );
});

export default HomePage;
