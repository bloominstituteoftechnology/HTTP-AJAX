import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import List from './List'; 

const url = "http://localhost:5000/friends"

class App extends Component {
  constructor(){
    super(); 
    this.state={
      friend: [], 
      name:"", 
      age: null, 
      email: "", 
    }
  }
  componentDidMount(){
    axios.get(url).then(response=>{
      console.log(response);
      this.setState({
        friend: response.data
      })
   })
   .catch(((err)=> console.log(err)))
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value, 
    })
  }
  addNewFriend = () => {
    const newFriend ={
      name: this.state.name, 
      age: this.state.age, 
      email: this.state.email,
    }
    axios.post(url, newFriend).then(response => {
      this.setState({
        friend: response.date
      })
    })
    .catch(((err)=> console.log(err)))
  }

  editFriend =(id)=>{
    const updatedFriend ={
      name: this.state.name, 
      age: this.state.age, 
      email: this.state.email,
    }
    axios.put(`http://localhost:5000/friends/${id}`, updatedFriend)
    .then(response => {
      this.setState({
        friends: response.data
      })
    })
    .catch((err) => console.log(err))
  }
  deleteFriend =(id)=>{
    const updatedFriend ={
      name: this.state.name, 
      age: this.state.age, 
      email: this.state.email,
    }
    axios.delete(`http://localhost:5000/friends/${id}`, updatedFriend)
    .then(response => {
      this.setState({
        friends: response.data
      })
    })
    .catch((err) => console.log(err))
  }
  render() {
    return (
      <div className="friend-list">
      <List list={this.state.friend} />
      <div className="form-input">
        <form onSubmit ={this.addNewFriend}>
          <input type="text" onChange={this.handleChange} value={this.state.name} name="name" placeholder="Name" />
          <input type="Number" onChange={this.handleChange} value={this.state.age}  name="age" placeholder="Age" />
          <input type="email" onChange={this.handleChange} value={this.state.email}  name="email" placeholder="E-mail" />
          <button onClick={this.addNewFriend}>Add New Friend</button>
          <button onClick={this.editFriend}>Edit Friend</button>
          <button onClick={this.deleteFriend}>Delete Friend</button>
        </form>
      </div>
      </div>
    );
  }
}

export default App;
