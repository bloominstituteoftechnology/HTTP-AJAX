import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';
import axios from 'axios';
import Navigation from './components/Navigation';


class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      friend: {
        name: '',
        age: undefined,
        email: '',
      },
    }
  }

  componentDidMount(){
    axios
        .get('http://localhost:5000/friends')
        .then(response => {
            this.setState({friends: response.data})
        })
        .catch(err => console.log(err));
}

handleChange = e => {
  this.setState ({
    friend: {
      ...this.state.friend,
      [e.target.name]: e.target.value,
    }
  });
}

handleNumberChange = e => {
  let input = 0;
  if (e.target.value===null){
    input = undefined;
  }else {
    input = parseInt(e.target.value, 10);
  }
  this.setState({
    friend:{
      ...this.state.friend,
      [e.target.name]: input,
    }
  })
}

createID(){
  axios
    .get('http://localhost:5000/friends')
    .then(response => {
      this.setState({
        friend:{
          ...this.state.friend,
          id: response.data[response.data.length-1].id+1,
        }
      })
    })
    .catch(err => console.log(err));
}

handleAddNewFriend = event =>{
  event.preventDefault();
  this.createID();
  axios
    .post('http://localhost:5000/friends', this.state.friend)
    .then(response => {
        this.setState({friends:response.data})
    })
    .catch(err => console.log(err));
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Friends</h1>
        </header>
        <Navigation />
        <Route
          exact path='/'
          render={props=>(
            <FriendList
              {...props}
              friends={this.state.friends}
            />
          )}
        />
        <Route
          path='/addfriend'
          render={props =>(
            <FriendForm
            {...props}
            friend={this.state.friend}
            handleChange={this.handleChange}
            handleNumberChange={this.handleNumberChange}
            handleAddNewFriend={this.handleAddNewFriend}
             />
          )}
        />
      </div>
    );
  }
}

export default App;