import React, { Component } from 'react';
import axios from 'axios';
// import logo from './logo.svg';

import Friend from './components/Friend';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      friends: [],
    }
  }

  componentDidMount(){
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        console.log(response);
        this.setState({friends: response.data });
      })
      .catch(err => {
        console.log("IN CATCH", err);
      })
  }

 



  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Edit <code>src/App.js</code> and save to reload.
            AJAX Assignment.
          </p>
          <div>Side of header <h1>App</h1> starts here.</div>
          {/* render list of friends here */}
          <div>
            {this.state.friends.map(friend => {
              return <Friend name={friend.name} id={friend.id} age={friend.age} email={friend.email}/>
            })}
          </div>
        </header>
        
      </div>
    );
  }
}

export default App;
