import React from 'react';
import { HeaderContentFooter } from 'templates';

import { UserEdit } from './components';

const EditPage = () => (
  <HeaderContentFooter
    breadcrumbs={[{ title: 'Users', to: '/users' }, { title: 'Edit Event' }]}
  >
    <UserEdit/>
  </HeaderContentFooter>
);

export default EditPage;
