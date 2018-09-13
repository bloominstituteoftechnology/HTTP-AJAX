import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

import SubmitFriend from './components/SubmitFriend'
import FriendList from './components/FriendList'
import Friend from './components/Friend'
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
} from 'react-router-dom'

class App extends Component {
  constructor(){
    super();
    this.state ={
      friends: [],
        id: '',
        name: '',
        age: '',
        email: '',
      }
    }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  updateCall() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  postRequest = e => {
    e.preventDefault()
    let newItem = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
      id: this.state.friends.length +1
    }
    axios
    .post('http://localhost:5000/friends', newItem)
    .then(response=>{
          this.setState(({ friends: response.data }));
        })
        .catch(error => {
          console.error('Server Error', error);
        });
      this.setState({id: '', name: '', age: '', email: '',})
  }

  updateFriend = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Route path='/' render={props =>
        <SubmitFriend {...props}
          postRequest={this.postRequest}
          values={this.state}
          handleChange={this.updateFriend} />}
        />
        <Route path='/' render={props =>
          <FriendList {...props}
            list={this.state.friends}
          />}
        />
        <Route path='/:id' render={props =>
          <div className='selected'>
            <h2> Selected </h2>
            <Friend {...props} item={this.state.friends[props.match.params.id-1]} />
          </div>
        } />

      </div>
    );
  }
}

export default App;
