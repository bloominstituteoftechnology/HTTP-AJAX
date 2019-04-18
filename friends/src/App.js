import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  NavLink,
  Route
} from 'react-router-dom';

import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
import Friend from './components/Friend'
import Home from './components/Home'

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsArray: [],
      activeFriends: null
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        console.log(res);
        this.setState({ friendsArray: res.data});
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: err });
      });
  }

  addFriend = (event, friend) => {
    event.preventDefault();
    axios
      .post('https://localhost:5000/friends', friend)
      .then(res => {
        this.setState({ friendsArray: res.data })
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: err });
      })
  };

  deleteFriend = (event, id) => {
    event.preventDefault();
    console.log("deleteFriend");
    axios
      .delete(`https://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({ 
          friendsArray: res.data 
        });
        this.props.history.push('/friends');
      })

      .catch(err => {
        console.log(err);
        this.setState({ error: err })
      });
  };

  updateFriend = (event, friend) => {
    event.preventDefault();
    axios
      .put(`https://localhost:5000/friends/${friend.id}`)
      .then(res => {
        this.setState({ 
          items: res.data,
          activeFriends: null
        });
        this.props.history.push('/friends');
      })
      .catch(err => {
        console.log(err)
      });
  };

  setUpdateFriend = ( event, friend) => {
    event.preventDefault();
    this.setState({
      activeFriends: friend
    });
    this.props.history.push('/friend-form');
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
        
          <p>
           yo yo
          </p>
          <FriendsList friendsArray={this.state.friendsArray}/>
          <FriendForm />

          {/* ROUTES LINKS?? */}
        </header>
        <div className="nav-links">
            <NavLink to="/item-form">{`${
              this.state.activeItem ? 'Update' : 'Add'
            } Item`}</NavLink>
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/item-list">Shop</NavLink>
          </div>
        

        <Route exact path="/" component={Home} />

        <Route
          path="/friends-list"
          exact
          render={
            props => <FriendsList {...props} items={this.state.friends} />
          }
        />

        <Route
          path="/friends-list/:id"
          render={props => (
            <Friend
              {...props}
              deleteItem={this.deleteItem}
              items={this.state.friendsArray}
              setUpdateForm={this.setUpdateForm}
            />
          )}
        />

        <Route
          path="/friend-form"
          render={props => (
            <FriendForm
              {...props}
              activeItem={this.state.activeItem}
              addFriend={this.addFriend}
              updateFriend={this.updateFriend}
            />
          )}
        />
      </div>
     
    );
  }
}

export default App;
