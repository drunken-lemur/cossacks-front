import React from 'react';
import { HeaderContentFooter } from 'templates';

import { UserCreate } from './components';

const CreatePage = () => (
  <HeaderContentFooter
    breadcrumbs={[
      { title: 'Users', to: '/users' },
      { title: 'Create new Event' },
    ]}
  >
    <UserCreate />
  </HeaderContentFooter>
);

export default CreatePage;
