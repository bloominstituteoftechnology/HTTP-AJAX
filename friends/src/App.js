import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import FriendApp from './components/Form';
import axios from 'axios';
import { Container } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    const friendsCopy = [...this.state.friends];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Container className="cardContainer">
          {friendsCopy.map((friend, index) => (<Display key={friend+index} friend={friend} />))}
        </Container>
        <FriendApp />
      </div>
    );
  }
}

export default App;
