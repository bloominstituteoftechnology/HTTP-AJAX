import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';

import axios from 'axios';
import FriendsList from './components/FriendsList';
import Home from './components/Home';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      friends: []
    }
  }
    componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {this.setState({ friends: response.data})})
      .catch(err => console.log(err));
  }

  render() {
    
    return (
      <div className="App">
        <header className="header">
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/friends">Friends</Link>
          </nav>
        </header>

        <Route path="/" exact render={(props) => <Home {...props} />} />
        <Route path="/friends" exact render={(props) => <FriendsList {...props} friends={this.state.friends} />} /> 
      </div>
    );
  }
}

export default App;