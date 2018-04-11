import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import FriendsList from './components/FriendsList';

class App extends Component {
  render() {
    return (
      <Router>
        <FriendsList />
      </Router>
    );
  }
}

export default App;
