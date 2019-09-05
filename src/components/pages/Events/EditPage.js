import React from 'react';
import { HeaderContentFooter } from 'templates';

import { EventEdit } from './components';

const EditPage = () => (
  <HeaderContentFooter
    breadcrumbs={[{ title: 'Events', to: '/events' }, { title: 'Edit' }]}
  >
    <EventEdit/>
  </HeaderContentFooter>
);

export default EditPage;
