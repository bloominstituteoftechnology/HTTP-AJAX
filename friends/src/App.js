import React from 'react';
<<<<<<< HEAD
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
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
>>>>>>> 68377a60ed6f9fca0ce42ab525503fd2c1cf4490
