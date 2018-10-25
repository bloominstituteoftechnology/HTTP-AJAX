import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
    friends: [],
    name: '',
    age: '',
    email: '',
  };
}

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data});
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  saveFormData = () => {
    const id = (this.state.friends[this.state.friends.length -1].id +1)
    const nextFriend = { id: id, name: this.state.name, age: this.state.age, email: this.state.email };

    axios.post(`http://localhost:5000/friends/`, nextFriend)
    .then(response => {
      this.setState({ friends: response.data, name: "", age: "", email: ""});
    })
    .catch(err => {
      console.log(err);
    });

  } 

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response =>
        this.setState({friends: response.data}))
  }


  render() {
    return (
      <div className="App">
      <h2>A list of friends, forthwith:</h2>
        {this.state.friends.map(friend => {
          return (
            <div>
            <h3>{friend.name}</h3>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
            <button onDelete={this.deleteFriend} onClick={this.deleteFriend}>X</button>
            </div>

          )
        })}

        
         <div className="AddToFriendsForm">
          <form>
            <input
              type="text"
              placeholder="name"
              name="name"
              onChange={this.handleChange}
            />
             <input
              type="text"
              placeholder="age"
              name="age"
              onChange={this.handleChange}
            />
             <input
              type="text"
              placeholder="email"
              name="email"
              onChange={this.handleChange}
            />
          </form>
          <button onClick={this.saveFormData}>Add friend</button>
        </div>
      </div>
    );
  }
}

export default App;
