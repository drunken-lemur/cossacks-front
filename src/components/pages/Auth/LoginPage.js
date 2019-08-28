import React from 'react';
import { HeaderContentFooter } from 'templates';

import { Login } from './components';

const LoginPage = () => (
  <HeaderContentFooter
    breadcrumbs={[{ title: 'Auth', to: '/auth' }, { title: 'Login' }]}
  >
    <Login />
  </HeaderContentFooter>
);

export default LoginPage;
