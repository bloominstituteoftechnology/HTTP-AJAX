import React from 'react';
import { Route } from 'react-router-dom';
import FriendsList from '../friends/FriendsList';
import Home from '../home/Home';

const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/friends" component={FriendsList} />
    </div>
  );
};

export default Routes;
