import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import FriendList from './Components/FriendList';


const url = "http://localhost:5000/friends";

class App extends Component {
  constructor() {
    super();

    this.state = {
      friends: [],
      loading: true
    };
  }

  componentDidMount() {
    axios.get(url).then(response => {
      console.log(response);
      this.setState({
        friends: response.data,
        loading: false
      });
    });
  }

  render() {
    return (
      <div className="App">
        {/* {this.state.friends.map(friend => (
            <div >
                {friend.name}
            </div>
            )
        ) } */}
        <FriendList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
