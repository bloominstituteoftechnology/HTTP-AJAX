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
        name: '',
        age: 0,
        email: '',         
    }
  }

  componentDidMount(){
    this.axiosGet()
  }

axiosGet = () => {
    axios
    .get('http://localhost:5000/friends')
    .then( res =>{
      this.setState({friends:res.data})
    }
  )
}

onChange = e => {
  e.preventDefault();
  console.log(typeof(e.target.value));
  this.setState({[e.target.name]: e.target.value });
}

formSubmit = e =>{
  e.preventDefault();
  let newFriend = {
    name : this.state.name,
    age: Number(this.state.age),
    email: this.state.email,
  }

  axios.post('http://localhost:5000/friends', newFriend)
    .then( res => {
      this.axiosGet()
    }
  )
}
  
  render() {
    return (
      <div className="App">
        <FriendsList friends={this.state.friends}/>
        <FriendForm onChange = {this.onChange} formSubmit={this.formSubmit}/>
      </div>
    );
  }
}

export default App;
