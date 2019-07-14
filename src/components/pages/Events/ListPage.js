import React from 'react';
import { Header } from 'organisms';
import { Default } from 'templates';

import { EventList } from './components';

const ListPage = () => <Default header={<Header/>} body={<EventList/>}/>;

export default ListPage;
