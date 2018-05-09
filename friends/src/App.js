import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import FriendsList from './components/FriendsList.js'

class App extends Component {
  constructor() {
    super() 
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: '',
    }
  }

  componentDidMount = () => {
    axios.get('http://localhost:5000/friends')
    .then((response) => {
      this.setState({friends: response.data});
    })
    .catch((err)=> {
      console.log(err);
    })

    // axios.post('http://localhost:5000/friends', ({friends}))
    // .then(response => {
    //   this.setState({friends: response.data});
    // })
    // .catch(err => {
    //   console.log(err);
    // })
  }

  handleFormChange = event => {
    this.setState({[event.target.name]:event.target.value});
  }

  submitFormChange = () => {
    const friends = this.state.friends;
    const info = {id: friends.length+1, name: this.state.name, age: this.state.age, email: this.state.email}
    friends.push(info);

    axios.post('http://localhost:5000/friends', {friends})
    .then(response => {
      this.state({friends: [], name: '', age: '', email: ''});
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="App">
        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
       
        <FriendsList friends={this.state.friends}/>
        
        <div>
          <form>
            <p> Name:
              <input name='name' value = {this.state.name} onChange = {this.handleFormChange}/>
            </p>

            <p> Age:
              <input name='age' value = {Number(this.state.age)} onChange = {this.handleFormChange}/>
            </p>

            <p> Email:
              <input name='email' value = {this.state.email} onChange = {this.handleFormChange}/>
            </p>

            <input type="submit" onClick = {this.submitFormChange}/>
          </form>
        </div>

      </div>
    );
  }
}

export default App;
