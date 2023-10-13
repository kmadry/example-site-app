import React from 'react';

const Site1 = React.lazy(() => import('./components/site1'));
const Site2 = React.lazy(() => import('./components/site2'));
const Wrapper = React.lazy(() => import('./components/wrapper'));

const routes = [
  {
    path: '/site1',
    element: <Site1/>,
  },
  {
    path: '/site2',
    element: <Site2/>,
  },
  {
    path: '/wrapper',
    element: <Wrapper/>,
    children: [
      {
        path: 'site1',
        element: <Site1/>,
      },
      {
        path: 'wrapper',
        element: <Wrapper/>,
        children: [
          {
            path: 'site1',
            element: <Site1/>,
          },
          {
            path: 'site2',
            element: <Site2/>,
          }
        ]
      }
    ]
  }
];

export default routes;