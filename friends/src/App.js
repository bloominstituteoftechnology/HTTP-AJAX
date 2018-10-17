import React, { Component } from 'react';
import './App.css';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';
import axios from 'axios';
import {Route} from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: '',
      age: null,
      email: '',      
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
         .then(res => {
           this.setState({
             friends: res.data,
           })
         })
         .catch(err => console.log(err))
  }

  changeHandler = event => {
    event.preventDefault();
    this.setState({[event.target.name]: event.target.value});
  }
  
  submitHandler = event => {
    event.preventDefault();
    if (this.state.name !== '' && this.state.age !== null && this.state.email !== '') {
      let obj = {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email,
      }
      axios.post('http://localhost:5000/friends', obj)
           .then(res => {
             this.setState({
               friends: res.data,
               name: '',
               age: null,
               email: '',   
             })
           })
           .catch(err => console.log(err))
    }
    else {
      alert("Please enter some data about your friend.")
    }
    document.querySelector('form').reset();
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={props => <FriendList {...props} friends={this.state.friends}/>}/>
        <Route path='/add' render={props => <FriendForm {...props} changeHandler={this.changeHandler} submitHandler={this.submitHandler}/>}/>
      </div>
    );
  } 
}

export default App;
