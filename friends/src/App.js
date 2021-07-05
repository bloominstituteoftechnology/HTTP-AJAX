import React, { Component } from 'react';
import FriendsList from '../src/components/FriendsList';
import './App.css';
import AddFriendForm from './components/AddFriendForm';
import EditFriendForm from './components/EditFriendForm';
import FriendCard from '../src/components/FriendCard';

import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';


class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      friend: {
        name: '',
        age: null,
        email: '',
        img: ''
      },
      friendToEdit: {
        name: '',
        age: null,
        email: '',
        img: ''
      }
    }
  }

  componentDidMount(){
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        console.log(response);
        this.setState({friends: response.data});
      })
      .catch(err => {
        console.log(err);
      });
  }

  changeHandler = event => {
    this.setState({
      friend: {
        ...this.state.friend,
        [event.target.name]: event.target.value
      }
    })
  }

  addNewFriend = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/friends', this.state.friend)
      .then(response => {
        console.log(`Success! You added a new friend.`)
        this.setState({friends: response.data})
      })
      .catch(error => console.log(`Oh no! ${error}`))
  }

  deleteFriend = (event, id) => {
    event.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({friends: response.data})
        // console.log(response)
      })
      .catch(error => console.log(error))
  }

  editFriend = (friend, id) => {
    axios
      .put(`http://localhost:5000/friends/${id}`, friend)
      .then(response => {
        console.log(`Success! ${response.data}`)
        this.setState({
          friends: response.data,
          editFriend: {
            name: '',
            age: null,
            email: ''
          }
        })
      })
      .catch(error => console.log(`Whoops.... ${error}`))
  }

  handleEdit = event => {
    this.setState({
      friendToEdit: {
        ...this.state.friendToEdit,
        [event.target.name] : event.target.value
      }
    })
  }
  
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <NavLink className="navlink" to="/">Home</NavLink>
          <NavLink className="navlink" to="/friend-form">Add Friend</NavLink>
        </div>
        <Route exact path="/" render={ props =>
          <FriendsList 
            friends={this.state.friends} 
            {...props}
            deleteFriend={this.deleteFriend}
            />
          } 
        />
        <Route path="/friend-form" render={ props => 
          <AddFriendForm
            {...props}
            changeHandler={this.changeHandler}
            addNewFriend={this.addNewFriend}
            friend={this.state.friend}
            />
        } />
        <Route exact path="/friends/:id" render={ props => 
          <FriendCard
            {...props}
            deleteFriend={this.deleteFriend}
            />
        } />
        <Route path="/friends/edit/:id" render={ props => 
          <EditFriendForm 
            {...props}
            editFriend={this.editFriend}
            friendToEdit={this.state.friendToEdit}
            handleEdit={this.handleEdit}
            />
        } />    
      </div>
    );
  }
}

export default App;
