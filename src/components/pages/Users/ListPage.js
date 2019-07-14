import React from 'react';
import { HeaderContentFooter } from 'templates';

import { UserList } from './components';

const ListPage = () => (
  <HeaderContentFooter breadcrumbs={[
    { title: 'Users' },
    { title: 'List of Users' },
  ]}>
    <UserList/>
  </HeaderContentFooter>
);

export default ListPage;
