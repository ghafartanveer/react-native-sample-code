import React from 'react';
import {useSelector} from 'react-redux';
import LoginLayout from '../../components/loginLayout';
import AccountLayout from '../../components/accountLayout';

const Account = () => {
  const data = useSelector(state => state?.user);

  const isUserLoggedIn = typeof data?.user?.token === 'string';

  return <>{isUserLoggedIn ? <AccountLayout /> : <LoginLayout />}</>;
};

export default Account;
