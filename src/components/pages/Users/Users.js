import * as React from 'react';
import { PageGroup } from 'components/common';

import { CreatePage, EditPage, ListPage, ViewPage } from './pages';

const routes = [
  {
    exact: true,
    path: '/users/create',
    component: CreatePage,
  },
  {
    exact: true,
    path: '/users/:id/edit',
    component: EditPage,
  },
  {
    exact: true,
    path: '/users',
    component: ListPage,
  },
  {
    exact: true,
    path: '/users/:id',
    component: ViewPage,
  },
];

const Users = () => <PageGroup routes={routes}/>;

export default Users;
