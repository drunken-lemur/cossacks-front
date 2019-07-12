import React from 'react';
import { Header } from 'organisms';
import { Default } from 'templates';

import { UserCreate } from './components';

const CreatePage = () => <Default header={<Header />} body={<UserCreate />} />;

export default CreatePage;
