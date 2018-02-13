import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    friends: [],
    tempName: '',
    tempAge: 0,
    tempEmail: '',
  };
  onChange = event => {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(this.state);
    console.log(this.state);
  };

  onSubmit = event => {
    event.preventDefault();
    if (this.state.tempName && this.state.tempAge && this.state.tempEmail) {
    const { tempName, tempAge, tempEmail } = this.state;

    axios.post('http://localhost:5000/friends', { 
      tempName, 
      tempAge, 
      tempEmail, })
      .then((result) => {
        console.log('success');
      }).catch((error) => {
        console.log('error', error);           
      });
    } else {
      alert('Please complete required fields!');
    }
      this.getFriend();
    };
    getFriend = () => {
      axios.get('http://localhost:5000/friends').then(response => {
        this.setState({friends: response.data});
      }).catch(error => {
        console.log('error', error);
      });
    }
  render() {
    return (
      <div className="App">
      {this.state.friends.map(friend => {
       return (
         <li key={friend.id} className='friend'>
         <div className='friend-name'>{friend.name}</div>
         <div className='friend-age'>{friend.age}</div>
         <div className='friend-email'>{friend.email}</div>
         </li> 
       );
      })}
      <div className="add-friend">
           <form onSubmit={this.addFriend}>
           <label htmlFor='name'>Name:</label><input id='name' type='text' name='name' />
           <label htmlFor='age'>Age:</label><input type='number' name='age' />
           <label htmlFor='email'>Email:</label><input type='text' name='email' />
           <input type='submit' value='submit' />
           </form>
           </div>
      </div>        
    );
  }
  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(response => {
      this.setState({friends: response.data});
    })
    .catch(error => {
      console.log('error', error);
    });    
  }
}

export default App;
