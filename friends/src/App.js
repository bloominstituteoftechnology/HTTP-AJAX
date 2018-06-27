import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Friends from './components/Friends.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friendInput: '',
      friendList: [],
    };
  }

  componentDidMount() {
    const friendRequest = axios.get('http://localhost:5000/friends');
    friendRequest.then((response) => { this.setState({ friendList: response.data }); });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Friends friendList={this.state.friendList} />
      </div>
    );
  }
}

export default App;
