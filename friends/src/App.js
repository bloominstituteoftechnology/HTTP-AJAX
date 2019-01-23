import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios'

import Home from './components/Home'
import FriendsList from './components/FriendsList'
import Friend from './components/Friend'
import FriendForm from './components/FriendForm'

import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state ={
        friends: [],
        friend: {
          name: '',
          age: '',
          email: '',
        }
    }
}

componentDidMount() {
    axios
        .get('http://localhost:5000/friends')
        .then(response => {
            console.log(response)
            this.setState(() => ({ friends: response.data })
        )})
        .catch(error => {
            console.log('Server Error', error)})
}

handleChange = event => {
    this.setState({
      friend:{
        ...this.state.friend,
      [event.target.name]: event.target.value }})
}

addNewFriend = (event) => {
  event.preventDefault()
    axios
        .post('http://localhost:5000/friends', this.state.friend)
        .then(response => {
            this.setState({friends: response.data})
        })
        .catch(error => {
            console.log('Server Error', error)
        })
}

deleteFriend = (event, id) => {
  event.preventDefault()
  axios.delete(`http://localhost:5000/friends/${id}`)
    .then(response => this.setState({ friends: response.data}))
}

  render() {
    const { friends } = this.state
    return (
      <div className="App">
        <ul className="navbar">
          <li>
            <NavLink exact to="/" activeClassName="activeNavButton">Home</NavLink>
          </li>
          <li>
            <NavLink to="/friends" activeClassName="activeNavButton">Friends List</NavLink>
          </li>
          <li>
            <NavLink to="/add-friend" activeClassName="activeNavButton">Add New</NavLink>
          </li>
        </ul>
        <Route exact path="/" component={Home} />  
        <Route exact path="/friends" render={props => <FriendsList {...props} friends={friends} />} />
        <Route path="/friends/:id" render={props => <Friend {...props} friends={friends} deleteFriend={this.deleteFriend}  />} />
        <Route path="/add-friend" render={props => <FriendForm {...props} friend={this.state.friend} addNewFriend={this.addNewFriend} handleChange={this.handleChange} />} />
      </div>
    );
  }
}

export default App;
