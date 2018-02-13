import React, { Component } from 'react';
import axios from 'axios';


import './App.css';
  // let total = () => {
  //   total += this.state.friends.id[id.length-1];
  // } //trying to create an counterFunction called total that count the the total number of friends on you firendList
class App extends Component {
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
          <h1 className="component__title">your current friends()</h1>
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
            {this.state.friends.map((friends) => {
              return (
              <li key={friends.id} className="friends">
                  {/* <span className="friendsList">{serverFriends.name}</span>
                  <span className="friendsList">{serverFriends.age}</span>
                  <span className="friendsList">{serverFriends.email}</span> */}
              </li> // <li> not working yet!
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
  //   axios
  //     .get( 'http://localhost:5000/friends' )
  //     .then((response) => {
  //       this.setState({ friends : response.data }) // this is where we change the state of the empty serverFreinds array and call the data

  //     })
  // }

export default App;


