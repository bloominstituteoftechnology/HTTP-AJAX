import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
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
        },
        isUpdating: false
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
            this.props.history.push('/friends')
        })
        .catch(error => {
            console.log('Server Error', error)
        })
       
}

deleteFriend = (id) => {
   axios.delete(`http://localhost:5000/friends/${id}`)
  .then(response => this.setState({ friends: response.data}))
}

linkToUpdateFriendsList = (id) => {
  const individualUpdate = this.state.friends.find(friend => friend.id === id)
  this.setState({ isUpdating: true, friend: individualUpdate }, () => this.props.history.push('/friend-form'))
}

updateFriend = (id) => {
  axios.put(`http://localhost:5000/friends/${id}`, this.state.friend)
  .then(response => { 
    this.setState({ freinds: response.data, isUpdating: false}) 
    this.props.history.push('/friends')})
  .catch(error => console.log(error))
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
            <NavLink to="/friend-form" activeClassName="activeNavButton">Add New</NavLink>
          </li>
        </ul>
        <Route exact path="/" component={Home} />  
        <Route exact path="/friends" render={props => <FriendsList {...props} friends={friends} />} />
        <Route 
          path="/friends/:id" 
          render={props => (
            <Friend 
              {...props} 
              friends={friends} 
              deleteFriend={this.deleteFriend} 
              linkToUpdateFriendsList={this.linkToUpdateFriendsList}   
            /> 
          )}
        />
        <Route 
          path="/friend-form" 
          render={props => (
            <FriendForm 
              {...props} 
              friend={this.state.friend} 
              addNewFriend={this.addNewFriend} 
              handleChange={this.handleChange} 
              updateFriend={this.updateFriend}
              isUpdating={this.state.isUpdating}
            /> 
          )} 
        />
      </div>
    );
  }
}

export default withRouter(App);
