import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

import SubmitFriend from './components/SubmitFriend'
import DeleteFriend from './components/DeleteFriend'
import FriendList from './components/FriendList'
import Friend from './components/Friend'
import FriendUpdateForm from './components/FriendUpdateForm'
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
      selected: {},
        name: '',
        age: '',
        email: '',
      }
    }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        console.log(response)
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
    }
    axios
    .post('http://localhost:5000/friends', newItem)
    .then(response=>{
          console.log(response)
          this.setState(({ friends: response.data,
            id: '', name: '', age: '', email: '',
           }));
        })
        .catch(error => {
          console.error('Server Error', error);
        });
  }

  updateFriend = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  selectFriend = (selected) => {
    this.setState({
      selected
    })
  }

  deleteFriend = (event, friendId) => {
    event.preventDefault();
    axios
    .delete(`http://localhost:5000/friends/${friendId}`)
    .then(response => this.setState({friends: response.data}))
    .catch(error => {
      console.error('Server Error', error);
    });
  }

  updateFormChange = (e) => {
    this.setState({
      selected: {
        ...this.state.selected,
        [e.target.name] : e.target.value
      }
    })
  }

  putFriend = e => {
    e.preventDefault();
    console.log(this.state.selected.id);
    axios
    .put(`http://localhost:5000/friends/${this.state.selected.id}`,
      this.state.selected)
    .then(response => this.setState({friends: response.data}))
    .catch(error => {
      console.error('Server Error', error);
    });
  }

//

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
          <DeleteFriend {...props}
          />}
        />
        <Route path='/' render={props =>
          <FriendList {...props}
            list={this.state.friends}
            selectFriend={this.selectFriend}
            deleteIt={this.deleteFriend}
          />}
        />
        <Route path='/:id' render={props =>
          <div className='selected'>
            <h2> Selected </h2>
            <Friend {...props}
              item={this.state.selected}
              deleteIt={this.deleteFriend}
              selectFriend={this.selectFriend}
             />
             <FriendUpdateForm
               values={this.state.selected}
               handleChange={this.updateFormChange}
               update={this.putFriend}
              />
          </div>
        } />

      </div>
    );
  }
}

export default App;
