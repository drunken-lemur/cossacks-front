import * as React from 'react';
import { Header } from 'organisms';
import { Default } from 'templates';

import { EventSubscribe } from './components';

const SubscribePage = () => (
  <Default header={<Header/>} body={<EventSubscribe/>}/>
);

export default SubscribePage;
