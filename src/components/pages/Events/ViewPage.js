import React from 'react';
import { HeaderContentFooter } from 'templates';

import { EventView } from './components';

const ViewPage = () => (
  <HeaderContentFooter breadcrumbs={[
    { title: 'Events' },
    { title: 'View Event' },
  ]}>
    <EventView/>
  </HeaderContentFooter>
);

export default ViewPage;
