import React, { Component } from 'react';
import Friend from './Components/Friends/friends.js';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    friends: [],
    newName: '',
    newAge: '',
    newEmail: '',
  }
  
  render() {
    return (
      <div className="container">
        <form className="form" onSubmit={this.addNewFriend}>
          <div className="header"> Add a Friend </div>
          <label htmlFor="Name">Name</label>
          <input className="form__items" label="Cody" type="text" onChange={this.handleNewName} placeholder="Name Here"  value={this.state.newName}/>
          <label htmlFor="Name">Age</label>
          <input className="form__items" type="text" onChange={this.handleNewAge} placeholder="Age Here" value={this.state.newAge}/>
          <label htmlFor="Name">Email</label>
          <input className="form__items" type="text" onChange={this.handleNewEmail} placeholder="Email Here" value={this.state.newEmail}/>
          <input style={{marginTop:"15px", fontSize:"15px", background:'black', color:'pink', borderRadius:'75%'}} className="form__items" type="submit" value="Click to Add Friend" />
        </form>
        <div className="header"> Your Friends </div>
        <div className="grid">
          {this.state.friends.map(friend => {
            return <Friend 
            key={friend.id} 
            friend={friend}
            remove={this.removeFriend}
            />;
          })}
        </div>
      </div>
    );
  }

  deleteFriend = (event) => {
    event.preventDefault();
      axios.delete('http://localhost:5000/friends', {
        name: this.state.newName,
        age: this.state.newAge,
        email: this.state.newEmail,
      })
      .then(response => {
        this.setState({ friends: response.data});
      })
      .catch(error => {
        console.log(error);
      });
    }

  removeFriend = id => {
      const endpoint = `http://localhost:5000/friends/${id}`;
      axios.delete(endpoint)
      .then(response => {
        this.setState({friends: response.data});
      })
      .catch(error  => {
        console.log(error);
      });
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data});
      })
      .catch(error => {
        console.log('there was error', error);
      });
      
  }

  handleNewName = (event) => {
    this.setState({newName: event.target.value});
  }

  handleNewAge = (event) => {
    this.setState({newAge: event.target.value});
  }

  handleNewEmail = (event) => {
    this.setState({newEmail: event.target.value});
  }

  addNewFriend = (event) => {
    event.preventDefault();
    if (this.state.newName==='' || this.state.newAge==='' || this.state.newEmail==='') alert("Fill out the form fool!");
    else {
      axios.post('http://localhost:5000/friends', {
        name: this.state.newName,
        age: this.state.newAge,
        email: this.state.newEmail,
      })
      .then(response => {
        this.setState({ friends: response.data});
      })
      .catch(error => {
        console.log(error);
      });
    this.setState({
      newName: '',
      newAge: '',
      newEmail: '',
    })
    }
  }
}

export default App;