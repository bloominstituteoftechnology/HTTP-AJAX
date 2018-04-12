import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: [],
      name: "",
      age: "",
      email: "",
      id: "",
      counter: 6
    }
  }


  componentDidMount() {
    this.getNotes();
   };

   getNotes = () => {
    axios.get('http://localhost:5000/friends')
    .then(response => {
      this.setState({
        friends: response.data
      });
    })
    .catch(err => {
      console.log(err);
    })
  }

   handleInput = e => {
     this.setState({[e.target.name]: e.target.value});
   }

   


   sendFriend = () => {
    const newFriend = {
      name: this.state.name,
      age: Number(this.state.age),
      email: this.state.email,
      id: this.state.counter + 1
    }
    axios.post(('http://localhost:5000/friends'), newFriend) 
      .then(friendSent => {
        this.getNotes();
      })
      .catch(err => {
        console.log(err);
      });
      this.setState( {
        name: '', age: '', email: '', counter: newFriend.id
      })
   };


  render() {
    return (
      <div>
        <div className="friend__card">
          {this.state.friends.map(friend => (
              <Friends key={friend.id} friend={friend}/>
          ))}
        </div>
        <input type="text" onChange={this.handleInput} placeholder="Name" name="name" value= {this.state.name}/>
        <input type="text" onChange={this.handleInput} placeholder="Age" name="age" value= {this.state.age}/>
        <input type="text" onChange={this.handleInput} placeholder="Email" name="email" value= {this.state.email}/>
        <button onClick={this.sendFriend }>New Friend</button>
      </div>
    );
  }
}

function Friends({friend}) {
  const{name, age, email, id} = friend;
  return(
      <div className="friend_test">
        <div className="friend">{name}</div>
        <div className="friend">{age}</div>
        <div className="friend">{email}</div>
        <div className="friend">{id}</div>
        <button>Delete me</button>
      </div>
  )
}



export default App;
