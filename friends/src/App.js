import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateFriend from './component/CreateFriend';
import FriendList from './component/FriendList'
import axios from 'axios';

class App extends Component {
  state = {
    friends: [],
    name: '',
    age: '',
    email: '',
  };
  getNextId = () => {
    return this.nextId++;
  };

  addNewFriend = (e) => {
    e.preventDefault();
    const newFriend = {
      id: this.getNextId(),
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
    }
  };

  const newFriend = [...this.state.friends,newFriend];
  this.setState({friends: newFriend, name:'',age:'',email:''});


  handleInputChange = e => {
    this.setState({ [name: e.target.name]: e.target.value });
    
  };
  

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Friends List</h1>
        </header>
        <p className="App-intro">
          <FriendList obj={this.state.friends} />

          <div className="friend-form">
            <form onSubmit={this.addNewFriend}>
                <label>Name: </label>
                <input type="text" placeholder = 'Name' name='Name' value={this.state.name} onChange={this.handleInputChange}/>

                <label>Age: </label>
                <input type="text" placeholder = 'Age' name='Age' value={this.state.age} onChange={this.handleInputChange}/>

                <label>Email:  </label> 
                <input type="text" placeholder = 'Email' name='Email' value={this.state.email} onChange={this.handleInputChange}/>

                <button type="submit">Add Friend</button>
            </form>
          </div>
        </p>
      </div>
    );
}
    componentDidMount() {
      axios.get('http://localhost:5000/friends')
      .then(res => {
        console.log(res.data);
        this.setState({friends: res.data});
      })
      .catch(error => {
        console.log('there was error', error);
      });
    }
}

export default App;
