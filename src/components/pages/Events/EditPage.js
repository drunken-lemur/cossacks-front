import React from 'react';
import { HeaderContentFooter } from 'templates';

import { EventEdit } from './components';

const EditPage = () => (
  <HeaderContentFooter breadcrumbs={[
    { title: 'Events' },
    { title: 'Edit' },
  ]}>
    <EventEdit/>
  </HeaderContentFooter>
);

export default EditPage;
