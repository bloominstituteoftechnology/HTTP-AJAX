import React, { Component } from 'react';
import axios from 'axios';
// import Button from './Button.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: ''
    }
  }
  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState(() => ({ friends: [...response.data] }));
      })
      .catch(err => {
        console.error("error:", err);
      });    
  }
  handleChange = (e) => { this.setState({[e.target.name]: e.target.value}) };
  buttonSubmit = () => {
    const { name, age, email } = this.state
    axios
      .post('http://localhost:5000/friends', { name, age, email })
      .then( (response) => {
        this.setState({ friends: response.data, name: '', age: '', email: ''})
      })
      .catch(err => {
        console.error("error:", err);
      });
  }
  buttonUpdate = (id) => {
    const updatedFriend = { name:this.state.name, age:this.state.age, email:this.state.email }
    axios
      .put(`http://localhost:5000/friends/${id}`, updatedFriend)
      .then( (response) => {
        this.setState({ friends: response.data })
      })
      .catch(err => {
        console.error("error:", err);
      });
  }
  buttonDelete = (id) => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then( (response) => {
        this.setState({ friends: response.data })
      })
      .catch(err => {
        console.error("error:", err);
      });
  }
  render() {
    return (
      <div className="App">
          <input type="text" placeholder=" Name " name="name" onChange={this.handleChange} value={this.state.name} />
          <input type="number" placeholder=" Age " name="age" onChange={this.handleChange} value={this.state.age} />
          <input type="text" placeholder=" Email " name="email" onChange={this.handleChange} value={this.state.email} />
          <button onClick={this.buttonSubmit}>Submit</button>
          <ul className="friends">
            {this.state.friends.map(friend => {
              return (
                  <li key={friend.id} className="friend">
                        <p>Name: {friend.name}</p>
                        <p>Age: {friend.age}</p>
                        <p>Email: {friend.email}</p>
                        <button onClick={()=>this.buttonDelete(friend.id)}>Delete</button>
                        <button onClick={()=>this.buttonUpdate(friend.id)}>Update</button>
                  </li>
              )
            })}
          </ul>
      </div>
    );
  }
}

export default App;