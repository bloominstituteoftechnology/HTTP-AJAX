import React, { Component } from 'react';
import axios from 'axios';


import './App.css';
  // let total = () => {
  //   total += this.state.friends.id[id.length-1];
  // } //trying to create an counterFunction called total that count the the total number of friends on you firendList
class friends extends Component {
  state = {
    friends : [],
    staticFriends: [{ // this was a test to see if the react app will work on static data
      id :0, 
      name: 'ala',
      age: 31,
      email: 'ala_ayaad@@yahoo.com',
    },{
      id: 1,
      name: 'Roy',
      age: 28,
      email:'roy_@yahoo.com',
    }],
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span className="component__title">your current friends()</span>
        </header>
          <div className="friendsList">
            {/* <ul> // **** this the static test friendsList working****
            {this.state.StaticFriends.map((friends) => {
              return (
              <li key={friends.id} className="friends">
                  <span className="friendsList">{staticFriends.name}</span>
                  <span className="friendsList">{staticFriends.age}</span>
                  <span className="friendsList">{staticFriends.email}</span>
              </li>
              )
            })}
            </ul> */}
            <ul>
            {this.state.friends.map((friend) => {
              return (
              <li key={friends.id} className="friend">
                  <span className="friendsList">dadsda{friend.name}</span>
                  <span className="friendsList">{friend.age}</span>
                  <span className="friendsList">{friend.email}</span>
              </li> // <li> not working yet!
              )
            })}
            </ul>
          </div>
      </div>
    );
  }
  componentDidMoutn() {
    axios.get( 'http://localhost:5000/friends' )
    .then(response => this.setStates( { friends: response.data, } ))
    .catch(error => {console.log(error);})
    
  }
}


export default friends;


