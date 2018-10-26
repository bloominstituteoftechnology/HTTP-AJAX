import React from 'react';
import { Route } from 'react-router-dom';

import FriendList from './components/FriendList';
import Friend from './components/Friend';

const App = () => {
    return (
      <div>
        <Route exact path="/" component={FriendList} />
        <Route path="/friends/:id" render={(props) => 
        <Friend {...props} />}
        />
      </div>
    );
}

export default App;