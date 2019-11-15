import React, { Component } from 'react';
import './App.css';
import FriendList from './Components/FriendList';
import axios from 'axios'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      friends : [],
      friend : '',
      age : '',
      email : ''
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response =>{
        console.log(response)
        this.setState({ friends : response.data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleChange = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }
  handleSubmit = () => {
    let newFriend = {name : this.state.friend , age : parseInt(this.state.age) , email : this.state.email}
    axios
        .post("http://localhost:5000/friends", newFriend  )
        .then(response => {
          console.log("POST",response)
          this.setState({friends : response.data , friend : ''})
        })
        .catch(err => {
          console.log(err)
        })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to our Friends List</h1>
        </header>
        <FriendList friends={this.state.friends}/>
        <form action="">
        <input
        type="text"
        name="friend"
        placeholder ="add name here "
        onChange = {this.handleChange}
        value = {this.state.friend}
        />
        <input
        type="text"
        name="age"
        placeholder= "add age"
        onChange = {this.handleChange}
        value = {this.state.age}/>
        <input
        type="email"
        name="email"
        placeholder="add email"
        onChange = {this.handleChange}
        value = {this.state.email} />
        <button
        type="submit"
        onClick ={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
