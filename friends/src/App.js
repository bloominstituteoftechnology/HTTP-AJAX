import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Lambda from './Lambda_Symbol.png';
{/*import FriendForm from './FriendForm';*/}

class App extends Component {
  constructor() {
    super();
    this.state = {
      friend: [],
      moreFriends: []
    }
  }

componentDidMount() {
  axios.get(`http://localhost:5000/friends`)
  .then((resp) => this.setState({friend:[...resp.data]}))
  .catch(err => console.log(err));
}

addFriends = (event) => {
event.preventDefault();
const currentFriends = this.state.friend;
currentFriends.push(this.state.moreFriends);
this.setState({
  friend: currentFriends,
  moreFriends: ""
});
}

handleMoreFriends = (event) => {
  this.setState({ moreFriends: event.target.value });
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={Lambda} className="App-logo" alt="logo" />
          <h1 className="App-title">Lambda Friends</h1>
        </header>
        <div>
        <ul className="friend-grid">
          {this.state.friend.map(friend => {
            return (
              <li key={friend.id} className="friend">
                <div className="friend-name">{friend.name}</div>
                <div className="friend-age">{`Age: ${friend.age}`}</div>
                <div className="friend-email">{`Email: ${friend.email}`}</div>
              </li>
            );
            <div>
              </div>
          })}
        </ul>
        <div>
                {this.state.friend.map((list, index)  => <div key={index}></div>)}
                <form onSubmit={this.addFriends}>
                <input
                 type = "text"
                 onChange = {this.handleMoreFriends}
                 placeholder = "Name"
                 value = {this.state.moreFriends}
                 />
                  <input
                 type = "text"
                 onChange = {this.handleMoreFriends}
                 placeholder = "Age"
                 value = {this.state.moreFriends}
                 />
                  <input
                 type = "text"
                 onChange = {this.handleMoreFriends}
                 placeholder = "Email"
                 value = {this.state.moreFriends}
                 />
                 <input type="submit" value="Submit" />
                 </form>
            </div>
           {/* <FriendForm */}
      </div>
      </div>
    );
  }
}


export default App;
