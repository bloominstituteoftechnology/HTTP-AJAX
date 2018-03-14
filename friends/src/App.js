import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css';
import FriendsList from './components/friendsList'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={FriendsList} />  
          <Route path="/friends/" component={FriendsList} />  
        </div>
      </Router>
    );
  }
}

export default App;
