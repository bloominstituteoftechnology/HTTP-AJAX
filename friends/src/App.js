import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//components
import FriendsList from './components/FriendsList/FriendsList';
import FriendPage from './components/FriendPage/FriendPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>navbar</h1>
        <Router>
          <Switch>
            <Route path='/friend/:id' component={FriendPage} />
            <Route path='/' component={FriendsList} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
