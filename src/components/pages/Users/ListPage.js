import React from 'react';
import { Header } from 'organisms';
import { Default } from 'templates';

import { UserList } from './components';

const ListPage = () => <Default header={<Header />} body={<UserList />} />;

export default ListPage;
