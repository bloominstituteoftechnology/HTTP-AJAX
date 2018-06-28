import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import FriendForm from './components/FriendForm';
import Friends from './components/Friends';
import { Route, NavLink } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.url = 'http://localhost:5000/friends';
    this.state = {
      name: '',
      age: '',
      email: '',
      friendList: [],
    };
  }

  componentDidMount() {
    const friendRequest = axios.get(this.url);
    friendRequest.then(response => {
      this.setState({ friendList: response.data });
    });
  }

  handleInput = e => {
    let fieldName = e.target.name;
    let value = e.target.value;
    if (fieldName === 'age') value = parseInt(value, 10);
    this.setState({ [fieldName]: value });
  };

  handleNewFriend = e => {
    e.preventDefault();
    let { friendList, ...rest } = this.state;
    const friendPost = axios.post(this.url, rest);
    friendPost
      .then(response => {
        this.setState({ friendList: response.data });
      })
      .catch(response => {
        alert('Add friend failed!');
      });
    this.setState({
      name: '',
      age: '',
      email: '',
    });
  };

  handleFriendUpdate = (friend) => {
    axios.put(`${this.url}/${friend.id}`, friend)
      .then((response) => {
        console.log(response);
        this.setState({friendList: response.data})
      })
      .catch((response) => {alert('Save failed: ', response.data )});
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Friend Having Utility</h1>
          <nav>
            <div>
              <NavLink
                exact
                to="/"
                activeStyle={{ fontWeight: 'bold', backgroundColor: 'yellow' }}
              >
                See Friends
              </NavLink>
              <NavLink
                to="/addfriend"
                activeStyle={{ fontWeight: 'bold', backgroundColor: 'yellow' }}
              >
                Add Friends
              </NavLink>
            </div>
          </nav>
        </header>
        <Route exact path="/" render={() => <Friends friendList={this.state.friendList} handleFriendUpdate={this.handleFriendUpdate} />} />
        <Route
          exact
          path="/addfriend"
          render={() => (
            <FriendForm
              nameInput={this.state.name}
              ageInput={this.state.age}
              emailInput={this.state.email}
              handleInput={this.handleInput}
              handleFriendForm={this.handleNewFriend}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
