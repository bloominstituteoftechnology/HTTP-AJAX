import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  withRouter
} from 'react-router-dom';

import Form from './components/Form'
import Friend from './components/Friend'
import FriendList from './components/Friendlist'


class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: ''
    }
  }

  componentDidMount() {
    // ajax request to get the items from a server on mount
    //1. invoke .get
    //2. pass in the server url - base url + endpoint
    axios.get('http://localhost:5000/friends')
    .then(res => {
      this.setState({ friends: res.data });
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }

  createFriend = ()=> {
    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }

    axios.post('http://localhost:5000/friends', newFriend)
    .then(res => {
      this.setState({ friends: [...this.state.friends, newFriend]
      });
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  
    // this.setState ({
    //   friends: [...this.state.friends, newFriend]
    // })

  }

  handleChanges = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
}

getItemById = id => {
  axios
    .get(`http://localhost:3333/itemById/${id}`)
    .then(res => this.setState({ activeItem: res.data }))
    .catch(err => console.log(err));
};


  render() {
    console.log(this.state)
    return (
      <div className="App">
      {/* <Form  handleChanges={this.handleChanges} createFriend={this.createFriend}/> */}
      <div>
        <Route
        exact
        path="/"
        render={props=><FriendList 
          {...props} 
          friends={this.state.friends}
          getItemById={this.getItemById}/> }
          />
        <Route
        path="/:friendId"
        render={props=><Friend 
          {...props} 
          friends={this.state.friends}
          /> }
        />
  
      </div>
      </div>
    );
  }
}

export default App;
