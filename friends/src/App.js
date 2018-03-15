import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import FriendsList from './components/FriendsList';

const App = () => {
  return (
    <Router>
        <div>
          <Route path='/friends' component={FriendsList} />
        </div>
    </Router>
  )
}
export default App;
