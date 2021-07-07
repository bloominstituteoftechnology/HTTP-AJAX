import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import axios from "axios";
import FriendList from './componenets/FriendList';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            friendsData: [],
            friends: ''
    };
  }

  componenetDidMount() {
      axios
      .get("http://localhost:5000/friends")
      .then(response => {
          console.log("POST RESPONSE", response);
          this.setState({ friendsData: response.data });
      })
      .catch(err => {
          console.log(err);
      });
  }

  handleNameChange = e => {
      this.setState({ friend: e.target.value});
  };

  handleSubmitFriend = () => {
      const friend = { friend: this.state.friend };
      axios
      .post("http://localhost:5000/friends", friend )
      .then(response => {
        console.log("POST RESPONSE", response);
        this.setState({ friendsData: response.data, friend: ""});
      })
      .catch(error => console.log(error));
  };


  render() {
      return (
          <div>
              <h1>Hello!!!</h1>
              <input type="text"
              placeholder="friend name"
              onChange={this.handleNameChange}
              name="friend"
              value={this.state.friend}
              />
              <button onClick={this.handleSubmitFriend}>Submit New Friend</button>
              <FriendList friends={this.state.friendsData}/>
          </div>
      );
  }
}


const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
