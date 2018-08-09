import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      name: "",
      age: 0,
      email: "",
      id: null
    }
  }

  componentDidMount(){
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  addFriendHandler = e => {
    e.preventDefault();

    axios
      .post('http://localhost:5000/friends', {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email,
        id: this.state.id
      })
      .then(response => {
        this.setState({friends: response.data});
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  editInput = e => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <ul>
            {this.state.friends.map(friend => <li className="friend-card" key={friend.id}>
              <div><p><strong>Name: </strong> {friend.name}<br/> <strong>id: </strong>{friend.id}<br/> <strong>Age: </strong>{friend.age}<br/> <strong>Email: </strong>{friend.email}<br/></p></div><span>X</span></li>)}
          </ul>

          <form>
            Name: <input type="text" name="name" onChange={this.editInput}/><br/>
            Age: <input type="number" name="age" placeholder="0" onChange={this.editInput}/><br/>
            Email: <input type="email" name="email" onChange={this.editInput}/><br/>
            id: <input type="number" name="id" placeholder="0" onChange={this.editInput}/><br/>
            <button type="submit" onClick={this.addFriendHandler}>Add Friend</button>
          </form>
        </div>
      </div>
      );
  }
}

export default App;
