import React, { Component } from "react";
import axios from "axios";
import FriendsList from "./components/FriendList";
import AddFriend from './components/AddFriend'
import { Route } from 'react-router-dom';

class App extends Component {
  state = {
    friends: [],
    loading: true,
  };

  componentDidMount() {
    axios.get("http://localhost:5000/friends").then(response => {
      this.setState({
        friends: response.data,
        loading: false
      })
    });
  }

  handleAddFriend = (name, age, email) => {
    let friend = {
      id: this.state.friends.length + 2,
      name: name,
      age: age,
      email: email
    }
    axios.post("http://localhost:5000/friends", friend)
      .then((response) => {
        this.setState({friends: response})
      })
      .catch((response) => {
        console.log(`error ${response}`)
      })
  }

  render() {
    return ( 
    <div>
      <FriendsList friends={this.state.friends} loading={this.state.loading} />
      <Route
        path='/add'
        render={(props) => 
          <AddFriend {...props} addFriend={this.handleAddFriend}/>
        }
      />
    </div>
    )
  }
}

export default App;
