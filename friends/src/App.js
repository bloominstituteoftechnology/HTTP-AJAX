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
        email: ''
      },
      currentEdit: {
        name: '',
        age: null,
        email:''
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

  addNewFriend = () => {
    axios
      .post('http://localhost:5000/friends', this.state.friend)
      .then(response => {
        this.setState({friends: response.data})
      })
      .catch(error => console.log(error))
  }

  deleteFriend = (event, id) => {
    event.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({friends: response.data})
      })
      .catch(error => console.log(error))
  }

  editFriend = (event, id) => {
    event.preventDefault();
    axios
      .put(`http://localhost:5000/friends/${id}`, this.state.friend)
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }

  onEditSelect = (event) => {
    event.preventDefault();
    this.setState({
      currentEdit: {
        name: 'hello',
        age: 23,
        email: 'myemail'
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
            editFriend={this.editFriend}
            onEditSelect={this.onEditSelect}
            currentEdit={this.state.currentEdit}

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
            editFriend={this.editFriend}
            onEditSelect={this.onEditSelect}
            currentEdit={this.state.currentEdit}

            />
        } />

        <Route path="/friends/edit/:id" render={ props => 
          <EditFriendForm 
            {...props}
            friend={props.friend}
            editFriend={props.editFriend}
            onEditSelect={props.onEditSelect}
            currentEdit={this.state.currentEdit}
            />
        } />    

      </div>
    );
  }
}

export default App;
