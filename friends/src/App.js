import React, { Component } from 'react';
import axios from 'axios'; 
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {friends: []};
  }

componentDidMount () {
  axios.get('http://localhost:5000/friends').then((response) => {
    console.log(response.data); 
    this.setState({
      friends: response.data
    })
  }); 
  
}

  render() {
    const friends = this.state.friends.slice(); 
    return (
      <div className="App">
        <h1>HTTP -AJAX Friends</h1>
        <ul>
          {friends.map(friend => <li key ={friend.id}>{friend.name}  {friend.age}  {friend.email}</li>)}
        </ul>
      
      </div>
    );
  }
}

export default App;
