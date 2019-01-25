import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './App.css';
import Friend from '../src/components/Friend'
import FriendForm from '../src/components/FriendForm'

const baseURL = 'http://localhost:5000';

const clearedFriend = {
  name: '',
  age: '',
  email: ''
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      friend: clearedFriend
    };
  }
  

  componentDidMount() {
    axios.get(`${baseURL}/friends`)
    .then(res => {
      console.log(res.data);
      this.setState({ friends: res.data })
    })
    .catch (err => { console.log(err)
    })
  }

  handleChanges = e => {
    e.preventDefault();
    e.persist();
    this.setState( prevState => {
      return{ 
        friend: {
          ...prevState.friend,
          [e.target.name]: e.target.value
        }
      }
      
    })
  }

  addFriend= () =>{
    axios
      .post(`${baseURL}/friends`, this.state.friend)
      .then(res =>{ this.setState
        ({ friends: res.data})
  })
      .catch(err => console.log(err))
}
  render() {
    return (
      <div className="App">
         <h1>Hello Friends!</h1>
          <FriendForm friend={this.state.friend}
            handleChanges={this.handleChanges}
            addFriend={this.addFriend}/>
         <Friend friends={this.state.friends} />
         
      </div>
    );
  }
}

export default App;
