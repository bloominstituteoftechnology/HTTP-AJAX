import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

import Friends from './component/Friends';
import NewFriendForm from './component/NewFriendForm';

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
  handleSubmit = (newFriend) => {
    axios.post("http://localhost:5000/friends", newFriend )
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
          <Friends {...props} friends={friends} />  } 
        />
        <Route path='/new' render={props => 
          <NewFriendForm {...props} handleSubmit={this.handleSubmit} /> } 
        />        
      </div>
    );
  }
}

export default App;
