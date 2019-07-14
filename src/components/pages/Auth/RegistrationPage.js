import React from 'react';
import { HeaderContentFooter } from 'templates';

import { Registration } from './components';

const RegistrationPage = () => (
  <HeaderContentFooter breadcrumbs={[
    { title: 'Auth' },
    { title: 'Registration' },
  ]}>
    <Registration/>
  </HeaderContentFooter>
);

export default RegistrationPage;
