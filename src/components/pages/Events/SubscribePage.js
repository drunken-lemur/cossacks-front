import React from 'react';
import { Header } from 'organisms/index';
import { Default } from 'templates/index';

import { EventSubscribe } from './components';

const SubscribePage = () => (
  <Default header={<Header />} body={<EventSubscribe />} />
);

export default SubscribePage;
