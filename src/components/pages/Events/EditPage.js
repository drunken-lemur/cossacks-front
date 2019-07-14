import React from 'react';
import { Header } from 'organisms';
import { Default } from 'templates';

import { EventEdit } from './components';

const EditPage = () => <Default header={<Header/>} body={<EventEdit/>}/>;

export default EditPage;
