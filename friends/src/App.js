import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import FriendsList from './FriendsList.js';
import AddForm from './AddForm.js';




class App extends Component {
  constructor(){
    super();
    this.state={

      friends:[]
    }

  }
  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => (this.setState({friends: response.data})) )
      .catch(err => console.log(err));
  }


  changeHandler=(event)=>{
    this.setState(
      
      {[event.target.name]: event.target.value}
    );}

    submitHandler=(event)=>{
      console.log("submitted");
      event.preventDefault();
      let newFriend={
        name:this.state.name,
        age:this.state.age,
        email:this.state.email
      }

      axios
      .post('http://localhost:5000/friends', {
        someData:{newFriend}
   })
      .then(response => (this.setState({name:'',age:'',email:''}) ))
      .catch(err => console.log(err));

    }
  

  render() {
    return (
      <div className="App">
      
        <FriendsList friends={this.state.friends}/>
        <AddForm 
        currentName={this.state.name}
        currentAge={this.state.age}
        currentEmail={this.state.email}
        submitHandler={this.submitHandler} changeHandler={this.changeHandler}/>

      </div>
    );
  }
}

export default App;
