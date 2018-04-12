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
    this.fetchData();
   };

   fetchData = () => {
    axios.get('http://localhost:5000/friends')
    .then(response => {
      this.setState({
        friends: response.data
      });
      console.log(this.state.friends)
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
        this.fetchData();
      })
      .catch(err => {
        console.log(err);
      });
      this.setState( {
        name: '', age: '', email: '', counter: newFriend.id
      })
   };

   deleteFriend = (friendId) => {
    axios.delete(`http://localhost:5000/friends/${friendId}`)
    .then(response => {
      this.fetchData()
    }) .catch(err => {
      console.log(err)
    })
   }


  render() {
    return (
      <div>
        <div className="friend__card">
          {this.state.friends.map(friend => (
            <div className="friend_test">
              <this.Friends key={friend.id} friend={friend}/>
              <button onClick={() => this.deleteFriend(friend.id)}>Delete me</button>
            </div>
          ))}
        </div>
        <input type="text" onChange={this.handleInput} placeholder="Name" name="name" value= {this.state.name}/>
        <input type="text" onChange={this.handleInput} placeholder="Age" name="age" value= {this.state.age}/>
        <input type="text" onChange={this.handleInput} placeholder="Email" name="email" value= {this.state.email}/>
        <button onClick={this.sendFriend }>New Friend</button>
      </div>

      
    );
  }

  Friends({friend}) {
    const{name, age, email, id} = friend
    return(
        <div>
          <div className="friend">{name}</div>
          <div className="friend">{age}</div>
          <div className="friend">{email}</div>
          <div className="friend">{id}</div>
        </div>
    )
  }
  
}
//<button onClick={() => this.deleteFriend(id)}>Delete me</button>




export default App;
