import React from 'react';
import { Header } from 'organisms';
import { Default } from 'templates';

import { EventView } from './components';

const ViewPage = () => <Default header={<Header/>} body={<EventView/>}/>;

export default ViewPage;
