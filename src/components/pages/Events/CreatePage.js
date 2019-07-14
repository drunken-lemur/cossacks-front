import React from 'react';
import { HeaderContentFooter } from 'templates';

import { EventCreate } from './components';

const CreatePage = () => (
  <HeaderContentFooter breadcrumbs={[
    { title: 'Events' },
    { title: 'Create Event' },
  ]}>
    <EventCreate/>
  </HeaderContentFooter>
);

export default CreatePage;
