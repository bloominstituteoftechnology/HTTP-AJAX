import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import FriendsList from './Components/FriendsList';
import EditFriend from './Components/EditFriend';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: "",
      age: "",
      email: ""
    };
  }

  componentDidMount() {
    axios
    .get(`http://localhost:5000/friends`)
    .then( response => {
      this.setState( () => ({ friends: response.data }))
    })
    .catch( error => {
      console.error( error );
    });
  };

  /* Handle submitting new friends to the list */
  handleSubmit = (event) => {
    event.preventDefault();
    let name = this.state.name;
    name = name[0].toUpperCase() + name.substr(1);
    axios
        .post("http://localhost:5000/friends", {
        name: name,
        age: this.state.age,
        email: this.state.email
        })
        .then( response => {
        this.setState( () => ({
            friends: response.data,
            name: "",
            age: "",
            email: ""
        }));
        })
        .catch( error => { console.error(error) });
  };

  /* Needs a change handler to set the state for submitting */
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className='App-header'>    
        <Route path="/edit/:id" component={EditFriend} />
        <Route exact path="/" component={()=>
          <FriendsList 
            friends={this.state.friends} 
            handleSubmit={this.handleSubmit} 
            handleChange={this.handleChange} />
        } />
      </div>
    );
  }
}
