import React from 'react';
import { Route } from 'react-router-dom';
import FriendsList from '../friends/FriendsList';

const Routes = () => {
  return <Route path="/" component={FriendsList} />;
};

export default Routes;
