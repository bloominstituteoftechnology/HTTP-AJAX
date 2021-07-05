import React, { Component } from 'react';
import './App.css';
import FriendList from './components/FriendList'
import FriendAdd from './components/FriendAdd'
import { Route } from 'react-router-dom';
import axios from 'axios';
import Friend from './components/Friend'

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      newName: '',
      newAge: null,
      newEmail: ''
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

  componentDidUpdate(){
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  handleName = e =>{
    this.setState({newName: e.target.value})
  }

  handleAge = e =>{
    this.setState({newAge: e.target.value})
  }

  handleEmail = e =>{
    this.setState({newEmail: e.target.value})
  }

  handleSubmit = e =>{
    e.preventDefault();

    const newFriend = {
      name: this.state.newName,
      age: this.state.newAge,
      email: this.state.newEmail            
    }

    axios
      .post('http://localhost:5000/friends', newFriend)
      .then(res => {
          console.log(res);
          console.log(res.data);
          this.setState({friends: res.data, newName: '', newAge: '', newEmail: ''});          
      })      
      .catch(err => {
          console.log(err);
      })
          
  }  

  render() {
    return (
      <div className = "app">
        <Route path = '/:id' component= {Friend} />        
        <Route exact path = '/' render= {(props) => 
        <FriendAdd {...props}
          handleAge = {this.handleAge} 
          handleEmail = {this.handleEmail} 
          handleName = {this.handleName}
          handleSubmit = {this.handleSubmit} 
          name ={this.state.newName}
          age ={this.state.newAge}
          email ={this.state.newEmail}
        /> } />
        <Route path = '/' render = {(props) =>
        <FriendList {...props}
          friends = {this.state.friends}
        />} />
      </div>
      
    );
  }
}

export default App;
