import React, { Component } from 'react';
import './App.css';
import FriendList from './Components/FriendList';
import axios from 'axios'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      friends : [],
      friend : ""
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response =>{
        console.log(response)
        console.log("DATA",response.data)
        this.setState({ friends : response.data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleChange = (e) => {
    this.setState({friend : e.target.value})
  }
  handleSubmit = () => {
    let newFriend = {name : this.state.friend , age : 30 , email : 'sulaiman.sanusi@icloud.com'}

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
        <input
        type="text"
        name="friend"
        placeholder ="add name here "
        onChange = {this.handleChange}
        value = {this.state.friend}
        />
        <input type="text" name="age" />
        <input type="email" name="email" />
        <button
        type="submit"
        onClick ={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default App;
