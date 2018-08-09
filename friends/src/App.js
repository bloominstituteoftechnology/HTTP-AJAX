import React, { Component } from 'react';
import axios from 'axios';
import List from './List'; 
import './App.css';


const url = "http://localhost:5000/friends"

class App extends Component {
  constructor(){
    super(); 
    this.state={
      friend: [],
      loading: true,
      name: '',
      age: [],
      email: ''
    }
  }
  componentDidMount(){
    axios.get(url).then(response=>{
      console.log(response);
      this.setState({
        friend: response.data
      })
     })
     


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


  render() {
    return (
      <div className="friend-list">
      <List list={this.state.friend} />
      <form >
          <input type="text" onChange={this.handleChange} value={this.state.name} name="name" placeholder="Name" />
          <input type="Number" onChange={this.handleChange} value={this.state.age}  name="age" placeholder="Age" />
          <input type="email" onChange={this.handleChange} value={this.state.email}  name="email" placeholder="E-mail" />
          <button onClick={this.addNewFriend}>Add New Friend</button>
        </form>
      </div>
    );
  }


}
 export default App;