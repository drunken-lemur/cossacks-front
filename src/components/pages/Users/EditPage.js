import React from 'react';
import { Header } from 'organisms';
import { Default } from 'templates';

import { UserEdit } from './components';

const EditPage = () => <Default header={<Header />} body={<UserEdit />} />;

export default EditPage;
