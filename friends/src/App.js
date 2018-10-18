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
      likes: '',
      pronoun: '',      
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
    if (this.state.name !== '' && this.state.age !== null && this.state.email !== '' && this.state.likes !== '' && this.state.pronoun !== '') {
      let obj = {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email,
        likes: this.state.likes,
        pronoun: this.state.pronoun,  
      }
      axios.post('http://localhost:5000/friends', obj)
           .then(res => {
             this.setState({
               friends: res.data,
               name: '',
               age: null,
               email: '',
               likes: '',
               pronoun: '',   
             })
           })
           .catch(err => console.log(err))
      alert('Submitting friend data. Please use the button to go back to Friend List.')
    }
    else {
      alert("Please enter some data about your friend.")
    }
    document.querySelector('form').reset();
  }

  deleteHandler = id => {
    axios.delete(`http://localhost:5000/friends/${id}`)
       .then(res => {
         this.setState({
           friends: res.data,
         })
       })
       .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={props => <FriendList {...props} friends={this.state.friends} deleteHandler={this.deleteHandler}/>}/>
        <Route path='/add' render={props => <FriendForm {...props} changeHandler={this.changeHandler} submitHandler={this.submitHandler}/>}/>
      </div>
    );
  } 
}

export default App;
