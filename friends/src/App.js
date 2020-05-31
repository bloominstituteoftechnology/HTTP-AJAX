import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import FriendsList from './FriendsList';

class App extends Component {
  constructor(){
    super();
    this.state = {
        name: '',
        age: '',
        email: '',
        friendlist: []
    };
    
}

componentDidMount(){
             
  axios.get(`http://localhost:5000/friends`)
     .then((response) => {
         console.log(response.data);
         this.setState({friendlist: response.data})
     })
     .catch(err => { console.log(err)

     });

}


handleFriendInput = event => {
  this.setState({[event.target.name]: event.target.value})
}


submitNewFriend(){
  const newFriend = {name: this.state.name, age: this.state.age, email: this.state.email};
  axios.post(`http://localhost:5000/friends`, newFriend)
    .then( response => {
      this.setState({ name:'', age:'', email:''})
    .catch( err => 
      console.log(err));
    })

}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <FriendsList friends={this.state.friendlist}/>
        <form>
           
           <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleFriendInput}/>
           <input type="number" name="age" placeholder="age" value={this.state.age} onChange={this.handleFriendInput} />
           <input  type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleFriendInput} />

           <button onClick={this.submitNewFriend}>New Friend</button>
        </form>
        
      </div>
    );
  }
}

export default App;
