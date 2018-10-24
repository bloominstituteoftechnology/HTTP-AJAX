import React, { Component } from 'react';
import axios from 'axios';
// import logo from './logo.svg';
import { Route } from 'react-router-dom';

import Friend from './components/Friend';
import FriendForm from './components/FriendForm';
import Home from './components/Home';

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

  //post getItemById axios POST here? 


  render() {
    return (
      <div className="App">
        <ul className="navbar">
            <li>
              <h1>Home</h1>
            </li>
            <li>
              <h1>Friends</h1>
            </li>
            <li>
              <h1>Add New Friends</h1>
            </li>
        </ul>

        <Route exact path='/' component={Home} />


        <header className="App-header">
          <div>Side of header <h1>App</h1> starts here.</div>
         
          <div>
            {this.state.friends.map(friend => {
              return <Friend name={friend.name} id={friend.id} age={friend.age} email={friend.email}/>
            })}
          </div>
        </header>
        <div>
            <FriendForm />
        </div>
      </div>
    );
  }
}

export default App;
