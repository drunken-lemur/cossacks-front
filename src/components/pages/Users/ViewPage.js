import React from 'react';
import { HeaderContentFooter } from 'templates';

import { UserView } from './components';

const ViewPage = () => (
  <HeaderContentFooter breadcrumbs={[
    { title: 'Users', to: '/users' },
    { title: 'View Event' },
  ]}>
    <UserView/>
  </HeaderContentFooter>
);

export default ViewPage;
