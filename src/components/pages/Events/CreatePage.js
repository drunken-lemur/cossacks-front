import React from 'react';
import { Header } from 'organisms';
import { Default } from 'templates';

import { EventCreate } from './components';

const CreatePage = () => <Default header={<Header/>} body={<EventCreate/>}/>;

export default CreatePage;
