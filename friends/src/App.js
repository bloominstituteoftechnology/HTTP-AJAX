import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import axios from "axios";
import Friends from './components/friends/Friends';
import FriendsForm from './components/friends/FriendsForm';
import Friend from './components/friends/Friend';
import './App.css';


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      loading: true,
      name: '',
      age: null,
      email: ''

    }
  }

  
  componentDidMount(){
    axios
    .get("http://localhost:5000/friends")
    .then(response => {
      this.setState(() => ({friends: response.data, loading: false
      }))
    })
  }



  inputHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }



  addNewFriend = () =>{
    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }

  axios
  .post("http://localhost:5000/friends", newFriend)
  .then(response => { 
      this.setState({
      friends: response.data
    })
  })
  .catch((err) => console.log(err))
}






  render() {

    return (
      <div className="app">
        <div className="list">
            <Route exact path="/" render={props=> <Friends {...props} friend={this.state.friends} deleteFriend={this.deleteFriend}/>} /> 
        </div>
        
        <div className="form">
            <Route exact path="/" render={props => <FriendsForm {...props} 
            inputHandler={this.inputHandler}
            addNewFriend={this.addNewFriend}
            deleteFriend={this.deleteFriend}
            value={this.state}
            />}/>
        </div>
        
            <Route path="/friends/:id" component={Friend}/>      
      </div>
    );
  }
}

