import React from 'react';
import { Header } from 'organisms/index';
import { Default } from 'templates/index';

import { Login } from './components';

const LoginPage = () => <Default header={<Header />} body={<Login />} />;

export default LoginPage;
