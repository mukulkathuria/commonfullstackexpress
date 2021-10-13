import React, { memo, useState } from 'react';
import { useDispatch } from 'react-redux';
import BackDrop from '../../BackDrop';
import { AccDetails, Logout } from './Style';

const UserDetails = memo(() => {
  const [bkdropshow, hideshow] = useState(() => true);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    localStorage.removeItem('x-token');
    localStorage.removeItem('qid');
    const { logout } = await import(
      '../../../Redux/Reducers/userReducer.actions'
    );
    dispatch(logout());
  };

  return (
    <React.Fragment>
      <BackDrop show={bkdropshow} clicked={() => hideshow(false)} />
      <AccDetails>
        <Logout onClick={handleLogout}>Log out</Logout>
      </AccDetails>
    </React.Fragment>
  );
});

export default UserDetails;
