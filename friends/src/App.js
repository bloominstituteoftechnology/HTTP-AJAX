import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {Route, Link} from 'react-router-dom';
import NewFriend from './components/newFriend';
import Friend from './components/list.js';

const url = 'http://localhost:5000/friends'

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [], 
      rev: [],
      name: '',
      // age: null, 
      // email: '',
      clicked: [],
      } 
  }
  
  componentDidMount() {
    console.log('mounted');
    axios.get(url).then(response => {
      console.log(response)
      let food = response.data.reverse()
      this.setState({
        friends: food
      })
    })
    .catch(function (error) {
      console.log(error)
    })  
  }
  
  click = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })   
  }

  eventDidUpdate(){
    debugger;
  }

  submit = event => {
    event.preventDefault();
    console.log('submit');
    axios.post(url, {
      name: this.state.name, 
      age: this.state.age,
      email: this.state.email
    })
    .then( () => {
      axios.get(url).then(response => {
        console.log(response)
         let food = response.data.reverse()
        this.setState({
          friends: food
        })
      })
      .catch(function (error) {
        console.log(error)
      })
    })
    this.setState({
      name: "", 
      age: "",
      email: ""
    })
  }

  // friendClick = event => {
  //   console.log(event.currentTarget)
  //   this.setState({
  //     clicked: event.currentTarget})
  //   // localStorage.setItem('selected', event.target.value)
  // }


  render() {
    return (
      <div className="App">
       
        <h1>mjk-HTTP-AJAX</h1>
        
        <div className="sub-app">

          <div className="form">
            <NewFriend click={this.click} submit={this.submit} data={this}/>
          </div>
          
          <div className="component">
            {this.state.friends.map(friend => {
              return (
                <Link key={friend.id} to={`/friend/${friend.id}`}>
                  <Friend key={friend.id} name={friend.name} click={this.friendClick} data={friend}>{friend.name}</Friend>
                </Link> 
              )
              
             
              
            })}
          </div>

          <div className="details">
          <p>New Friend sample profile</p>
           <Friend data={this.state} />
          </div>

        </div>  
     
      </div>
    );
  }
}

export default App;
