import React from 'react';
import { Header } from 'organisms/index';
import { Default } from 'templates/index';

import { EventView } from './components';

const ViewPage = () => <Default header={<Header />} body={<EventView />} />;

export default ViewPage;
