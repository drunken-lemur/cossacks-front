import React from 'react';
import { Header } from 'organisms/index';
import { Default } from 'templates/index';

import { EventList } from './components';

const ListPage = () => <Default header={<Header />} body={<EventList />} />;

export default ListPage;
