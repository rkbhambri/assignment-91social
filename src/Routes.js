import React from 'react';
const History = React.lazy(() => import('./components/History/History'));
const Address = React.lazy(() => import('./components/Address/Address'));

export const authenticated_routes = [
    {
        path: '/history',
        component: History
    },
    {
        path: '/address',
        component: Address
    },
    // {
    //     path: '/events/:id/leaderboard',
    //     component: Leaderboard
    // }
];
