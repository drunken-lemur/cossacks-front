import React from 'react';
import { HeaderContentFooter } from 'templates';

import { UserView } from './components';

const ViewPage = () => (
  <HeaderContentFooter breadcrumbs={[
    { title: 'Users' },
    { title: 'View Event' },
  ]}>
    <UserView/>
  </HeaderContentFooter>
);

export default ViewPage;
