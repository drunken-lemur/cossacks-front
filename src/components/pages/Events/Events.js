import React from 'react';
import {PageGroup} from 'components/common';

import {CreatePage, EditPage, ListPage, SubscribePage, ViewPage,} from './pages';

const routes = [
    {
        exact: true,
        path: '/events/create',
        component: CreatePage,
    },
    {
        exact: true,
        path: '/events/:id/edit',
        component: EditPage,
    },
    {
        exact: true,
        path: '/events',
        component: ListPage,
    },
    {
        exact: true,
        path: '/events/:id/subscribe',
        component: SubscribePage,
    },
    {
        exact: true,
        path: '/events/:id',
        component: ViewPage,
    },
];

const Events = () => <PageGroup routes={routes}/>;

export default Events;
