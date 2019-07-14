import React from 'react';
import { Header } from 'organisms';
import { Default } from 'templates';

import { UserView } from './components';

const ViewPage = () => <Default header={<Header/>} body={<UserView/>}/>;

export default ViewPage;
