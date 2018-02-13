import React from 'react';
import App from './App';
import { withRouter } from 'react-router-dom';

const AppWithRouter = props => {
  const Component = withRouter(App);

  return <Component {...props} />;
};

export default [
  {
    name: 'showroom',
    component: AppWithRouter,
    url: '/155417031',
    route: '/:videoId',
  },
  {
    name: 'welcome',
    component: AppWithRouter,
    url: '/',
    route: '/',
  },
];
