import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import FriendsList from "./components/FriendsList"

class App extends Component {
    constructor() {
      super();
      this.state = {
        friends:[]
      };
    }

    componentDidMount() {
      axios
        .get('http://localhost:5000/friends')
        .then(response => {
          console.log(response)
          this.setState({ friends: response.data.data});
        })
        .catch(err => console.log(err));
    }

  render() {
    return <div>
        <h1>List of Friends</h1>
          <FriendsList/>
        )}
      </div>;
  }
}

export default App;
