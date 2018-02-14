import React, { Component } from 'react';
import logo from './logo.svg';
// import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    friends: [{
      id :0, 
      name: 'ala',
      age: 31,
      email: 'ala_ayaad@@yahoo.com',
    },{
      id: 1,
      name: 'Roy',
      age: 28,
      email:'roy_@yahoo.com'
    }],
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome friends!!11one</h1>
        </header>
          <div className="friendsList">
            <ul>
            {this.state.friends.map((friends) => {
              return (
              <li key={friends.id} className="friends">
                  <span className="friendsList"></span>
                  <span></span>
                  <span></span>
              </li>
              )
            })}
            </ul>
          </div>
      </div>
    );
  }
}
  //componentWillmount() // used while page loading! guess
  // componentDidMount() { // its the one shows the HTML!
  //   this.setState({});
  //   axios
  // }

export default App;

