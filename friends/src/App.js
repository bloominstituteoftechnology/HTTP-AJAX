import React, { Component } from 'react';
import axios from 'axios';
// import logo from './logo.svg';
import { Route, NavLink } from 'react-router-dom';

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
  // POST PUT DELETE are 'user' interaction, will be in a button or something
  
// Post - (url, body)
// Get - (url)
// Put - (url/:id, id, body)
// Delete - (url/:id)
// Patch ??

// const body = {name: 'chris', age: 22}       note: just setting long object, many key-value  pairs into a variable

// axios.post(url, body)


  render() {
    return (
      <div className="App">
        <ul className="navbar">
            <li>
              <NavLink to="/">
                <h1>Home</h1>
              </NavLink>
            </li>
            <li>
              <NavLink to="/friends">
              <h1>Friends </h1>
              </NavLink>
            </li>
            <li>
              <NavLink to="/add-friend">
                <h1>Add New Friends</h1>
              </NavLink>
            </li>
        </ul>

        <Route exact path="/" component={Home} />

        <Route exact path="/friends"
          render={props => (<Friend {...props} friends={this.state.friends}/> )}
         />

     
          {/* <div>
            {this.state.friends.map(friend => {
              return <Friend name={friend.name} id={friend.id} age={friend.age} email={friend.email}/>
            })}
          </div> */}


        <Route
            path="/add-friend"
            render={props => (<FriendForm />)}
        />
      </div>
    );
  }
}

export default App;
