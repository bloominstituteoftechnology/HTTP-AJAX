import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from "./FriendsList";
import FriendForm from './FriendForm';

class App extends Component {
  constructor(props){
    super()
    this.state = {
      friends : [],
      newFriend: {
        name: '',
        age: null,
        email: '',                
      },
    }
  }

  componentDidMount(){
    axios
      .get('http://localhost:5000/friends')
      .then( res =>{
        this.setState({friends:res.data})
      }
    )
  }
onChange = e => {
  e.preventDefault();
  console.log(e.target);
  this.setState({ newFriend: { [e.target.name]: e.target.value } });
}

  
  render() {
    return (
      <div className="App">
        <FriendsList friends={this.state.friends}/>
        <FriendForm onChange = {this.onChange} />
      </div>
    );
  }
}

export default App;
