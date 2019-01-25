import React, { Component } from 'react';
import axios from 'axios';
import FriendsList from './components/friendsList/FriendsList'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      friends: []
    }
    
  }
  componentDidMount(){
    axios
    .get('http://localhost:5000/friends')
    .then(res => this.setState({friends:res.data}) )
    console.log(this.state)
    }; 
    
  render() {
    console.log(this.state.friends);
    return (
      <div className="App">
        <FriendsList friends = {this.state.friends}/>
      </div>
    );
  }
}

export default App;
