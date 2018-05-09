import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

import Friends from './component/Friends';
import FriendForm from './component/FriendForm';

class App extends Component {
  state = {
    friends: []
  }
  componentDidMount = () => {
    axios.get("http://localhost:5000/friends")
      .then(res => {
        const friends = res.data;
        this.setState({ friends });
      })
      .catch(err => console.log(err)) // to do: notify user with error message
  }
  handleAdd = (newFriend) => {
    axios.post("http://localhost:5000/friends", newFriend )
    .then(res => {
      const friends = res.data;
      this.setState({ friends });
    })
    .catch(err => console.log(err)) // to do: notify user with error message
  }
  handleUpdate = (id, updatedFriend) => {
    axios.put(`http://localhost:5000/friends/${id}`, updatedFriend )
    .then(res => {
      const friends = res.data;
      this.setState({ friends });
    })
    .catch(err => console.log(err))
  }
  handleDelete = (id) => {
    axios.delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        const friends = res.data;
        this.setState({ friends });
      })
      .catch(err => console.log(err)) // to do: notify user with error message
  }
  render() {
    const { friends }= this.state
    return (
      <div>
        <Link to='/'><button>Home</button></Link>
        <Link to='/new'><button>Add New Friend</button></Link>
        <Route exact path='/' render={props => 
          <Friends {...props} friends={friends} handleDelete={this.handleDelete}/>  } 
        />
        <Route path='/new' render={props => 
          <FriendForm {...props} handleAdd={this.handleAdd} /> } 
        />
        <Route path='/edit/:id' render={props => 
          <FriendForm {...props} friends={friends} handleUpdate={this.handleUpdate} /> } 
        />
      </div>
    );
  }
}

export default App;
