import React, { Component } from 'react';
import Nav from './components/navigation/Nav';
import './App.css';
import { Route } from 'react-router-dom';
import FriendsList from './components/friends/FriendsList';
import Home from './components/home/Home';
import axios from 'axios';
import AddFriendForm from './components/friends/AddFriendForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      inputName: '',
      inputAge: '',
      inputEmail: '',
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then((response) => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch((error) => {
        console.error('Server Error', error);
      });
  }

  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  resetInput = () => {
    console.log('test reset input');
    this.setState({
      inputName: '',
      inputAge: '',
      inputEmail: '',
    });
  };

  addFriend = (event) => {
    event.preventDefault();
    console.log('addFriend function');
    axios
      .post('http://localhost:5000/friends', {
        name: this.state.inputName,
        age: Number(this.state.inputAge),
        email: this.state.inputEmail,
      })
      .then((response) => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch((error) => {
        console.error('Server Error', error);
      });
    this.resetInput();
  };

  deleteFriend = (friendId) => {
    return axios
      .delete(`http://localhost:5000/friends/${friendId}`)
      .then((response) => this.setState({ friends: response.data }));
  };

  render() {
    console.log(this.state.friends);
    return (
      <div className="App">
        <Nav />
        <Route exact path="/" component={Home} />
        <Route
          path="/friends"
          render={(props) => (
            <FriendsList
              {...props}
              friends={this.state.friends}
              deleteFriend={this.deleteFriend}
            />
          )}
        />
        <Route
          path="/addfriend"
          render={(props) => (
            <AddFriendForm
              {...props}
              {...this.state}
              addFriend={this.addFriend}
              handleInput={this.handleInput}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
