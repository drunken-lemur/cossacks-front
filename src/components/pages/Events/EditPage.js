import React from 'react';
import { Header } from 'organisms/index';
import { Default } from 'templates/index';

import { EventEdit } from './components';

const EditPage = () => <Default header={<Header />} body={<EventEdit />} />;

export default EditPage;
