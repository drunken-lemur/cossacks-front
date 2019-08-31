import React from 'react';
import {HeaderContentFooter} from 'templates';

import {EventList} from './components';

const ListPage = () => (
    <HeaderContentFooter
        breadcrumbs={[
            {title: 'Events', to: '/events'},
            {title: 'List of Events'},
        ]}
    >
        <EventList/>
    </HeaderContentFooter>
);

export default ListPage;
