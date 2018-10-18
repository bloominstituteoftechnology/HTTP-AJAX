import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Friend from './components/Friend';
import NewFriend from './components/NewFriend';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      newFriend: {
        name: '',
        age: '',
        email: ''
      },
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => this.setState({friends: response.data}))
      .catch(error => console.log(error));
  }

  changeHandler = (e) => {
    this.setState({newFriend: {
                  ...this.state.newFriend,
                  [e.target.name]: e.target.value
                }
              })
  }

  deleteFriend = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${e.target.id}`)
      .then(response => this.setState({friends: response.data}))
      .catch(error => console.log(error));
  }



  addFriend = (e) => {
    e.preventDefault();
    const url = 'http://localhost:5000/friends';
    axios
      .post(url , this.state.newFriend)
      .then(response => this.setState({friends: response.data}))
      .catch(error => console.log(error));

    this.setState({newFriend: {
                        name: '',
                        age: '',
                        email: '',
    }})
  }

  updateFriend = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/friends/${e.target.id}`, this.state.newFriend)
      .then(response => this.setState({friends: response.data}))
      .catch(error => console.log(error));
      this.setState({newFriend: {
        name: '',
        age: '',
        email: '',
}})
  }

  render() {
    console.log(this.state.friends);
    return (
      <div className="App">
      <div className="nav">
        <NavLink to='/friends' activeClassName="selected">
            <span>Old Friends</span>
        </NavLink>
        <NavLink to='/newfriends' activeClassName="selected">
            <span>Add a new Friend</span>
        </NavLink>
      </div>
       <Route path='/friends' render ={props => (
         <div className='friend-home'>
          <Friend {...props} friends={this.state.friends} updateFriend = {this.updateFriend} deleteFriend = {this.deleteFriend}/>
          <input onChange={this.changeHandler} name ="name" type = "text" placeholder = "Name"/>
          <input onChange={this.changeHandler} name = "age" type = "text" placeholder = "Age"/>
          <input onChange={this.changeHandler} name= "email" type = "text" placeholder = "Email"/>
          </div>
        )}/>
       <Route path='/newfriends' render ={(props) => (
          <NewFriend {...props} changeHandler = {this.changeHandler} addFriend = {this.addFriend}/>
        )}/>
      </div>
    );
  }
}

export default App;
