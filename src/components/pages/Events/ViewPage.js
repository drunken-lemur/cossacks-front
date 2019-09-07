import * as React from 'react';
import { HeaderContentFooter } from 'templates';

import { EventView } from './components';

const ViewPage = () => (
  <HeaderContentFooter
    breadcrumbs={[{ title: 'Events', to: '/events' }, { title: 'View Event' }]}
  >
    <EventView/>
  </HeaderContentFooter>
);

export default ViewPage;
