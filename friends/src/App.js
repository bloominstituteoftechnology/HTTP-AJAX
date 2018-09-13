import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
import { Route, Link } from 'react-router-dom';
import FriendCard from './components/FriendCard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then((response) => {
        console.log('response.data', response.data);
        this.setState({
          friends: response.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  postNewFriend = (e) => {
    axios
    .post("http://localhost:5000/friends", {
      name: this.state.name,
      age: parseInt(this.state.age, 10),
      email: this.state.email

    })
    .then((response) => this.setState({ friends: response.data }))
    .catch(err => console.log(err))

  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
  });
  }

  handleUpdate = friendId => {
    axios.put()
  }
  render() {
    return (
      <div className="App">
      {this.state.friends.map}
        <Link to="/">Home</Link>
        <Link to="/addFriend">Add a new friend</Link>
        <Route
        exact path="/"
        render={(props) => <FriendsList {...props}
        friends={this.state.friends}/>}
        />
        <Route
        exact path="/addFriend"
        render={(props) => <FriendForm {...props}
        handleChange={this.handleChange}
        postNewFriend={this.postNewFriend}/>}
        />
        <Route
        exact path="/friends/:friendId"
        render={(props) => <FriendCard {...props}
        friends={this.state.friends} />}
        />
      </div>
    );
  }
}

export default App;
