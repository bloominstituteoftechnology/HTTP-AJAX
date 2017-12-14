import React, {Component} from 'react';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddFriend/>
        <FriendsList/>
      </div>
    );
  }
}

export default App;