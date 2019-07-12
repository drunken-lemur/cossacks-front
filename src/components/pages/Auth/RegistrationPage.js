import React from 'react';
import { Header } from 'organisms/index';
import { Default } from 'templates/index';

import { Registration } from './components';

const RegistrationPage = () => (
  <Default header={<Header />} body={<Registration />} />
);

export default RegistrationPage;
