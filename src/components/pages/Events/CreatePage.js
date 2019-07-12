import React from 'react';
import { Header } from 'organisms/index';
import { Default } from 'templates/index';

import { EventCreate } from './components';

const CreatePage = () => <Default header={<Header />} body={<EventCreate />} />;

export default CreatePage;
