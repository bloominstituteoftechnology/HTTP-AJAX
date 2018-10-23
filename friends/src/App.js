import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsList: [],
      name: "",
      age: "",
      email: ""
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends').then(response => this.setState({friendsList: [...response.data]}))
  }

  addNewFriend = e => {
    e.preventDefault();
    if(this.state.name && this.state.age && this.state.email) {
        const friend = {
        id: this.state.friendsList.length + 1,
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      }
      axios.post('http://localhost:5000/friends', friend).then(axios.get('http://localhost:5000/friends')
        .then(response => this.setState({
        friendsList: [...response.data],
        name: "",age:"",email:""
        })
      ))
    }        
  }
  changeHandler = e => this.setState({[e.target.name]: e.target.value});
  render() {
    return  <div className="App">
                {this.state.friendsList.map(friend => <p key={friend.id}>{friend.name}</p>)}
                <form>
                    <input placeholder="name" onChange={this.changeHandler} name="name" value={this.state.name}></input>
                    <input placeholder="age" onChange={this.changeHandler} name="age" value={this.state.age}></input>
                    <input placeholder="email" type="email" onChange={this.changeHandler} name="email"  value={this.state.email}></input>
                    <button onClick={this.addNewFriend}>Send Post</button>
                </form>
                
            </div>  
  }
}