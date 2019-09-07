import * as React from 'react';
import { HeaderContentFooter } from 'templates';

import { EventSubscribe } from './components';

const SubscribePage = () => (
  <HeaderContentFooter
    breadcrumbs={[{ title: 'Events', to: '/events' }, { title: 'Event Subscribe' }]}
  >
    <EventSubscribe/>
  </HeaderContentFooter>
);

export default SubscribePage;
