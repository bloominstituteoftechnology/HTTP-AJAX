import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Friends from './components/Friends';
class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      id: '',
      name: '',
      age: '',
      email: '',
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        console.log(response.data);
        this.setState({ friends: response.data })
      })
      .catch(error => (console.log('this sucks')))
  }

  name = (event) => {
    const newName = event.target.value;
    this.setState({
      name: newName
    })
  }
  age = (event) => {
    const newAge = event.target.value;
    this.setState({
      age: newAge
    })
  }
  email = (event) => {
    const newEmail = event.target.value;
    this.setState({
      email: newEmail
    })
  }
  addFriend = (event) => {
    event.preventDefault();
    let newId = this.state.friends.length + 1;
    this.setState({
      id: newId
    })
    const newFriend = {
      id: this.state.id,
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
    }

    axios
      .post('http://localhost:5000/friends', newFriend)
      .then(response => {
        this.setState({
          friends: response.data,
        })

      })
      .catch(error => { console.log('error!') })




  }

  deleteFriendHandler = (id) => {
    return () => {
      axios.delete(`http://localhost:5000/friends/${id}`)
        .then(response => {
          this.setState({
            friends: response.data,
          })
        })
        .catch(error => { console.log('error3') })
      console.log(id)
    }
  }
  updateFriendHandler = (id) => {
    
    axios.put(`http://localhost:5000/friends/${id}`, {
      
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      
    })
      .then(response => {
        this.setState({
          friends: response.data,

        })
      })
      // .catch(error => {
      //   console.log("errorUpdate")
      // })
  }
  

render() {
  return (
    <div className="App">
      {this.state.friends.map(friend => (
        <Friends key={friend.id} friend={friend} deleteFriendHandler={this.deleteFriendHandler} updateFriendHandler={this.updateFriendHandler} />
      ))}
      <form>
        <input placeholder='Name' onChange={this.name}></input>
        <input placeholder='Age' onChange={this.age}></input>
        <input placeholder='Email' onChange={this.email}></input>
        <button onClick={this.addFriend}>Save</button>
        
      </form>

    </div>
  );
}
}

export default App;
