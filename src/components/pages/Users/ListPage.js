import * as React from 'react';
import { HeaderContentFooter } from 'templates';

import { UserList } from './components';

const ListPage = () => (
  <HeaderContentFooter
    breadcrumbs={[{ title: 'Users', to: '/users' }, { title: 'List of Users' }]}
  >
    <UserList/>
  </HeaderContentFooter>
);

export default ListPage;
