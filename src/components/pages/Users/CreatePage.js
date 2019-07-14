import React from 'react';
import { HeaderContentFooter } from 'templates';

import { UserCreate } from './components';

const CreatePage = () => (
  <HeaderContentFooter breadcrumbs={[
    { title: 'Users' },
    { title: 'Create Event' },
  ]}>
    <UserCreate/>
  </HeaderContentFooter>
);

export default CreatePage;
