import React, { Component } from 'react';
import './App.css';
import Friendlist from './components/friendlist.js'
import FriendForm from './components/FriendForm.js'
import axios from "axios";

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [ ]
    }
  }
  componentDidMount(){
      axios
          .get("http://localhost:5000/friends")
            .then(response =>{
              this.setState({
                friends: response.data
              })
            })
  }
  Change = a => {
    this.setState({[a.target.name]: a.target.value })
  }

  Submit = a => {
      a.preventDefault();
    axios
      .post("http://localhost:5000/friends",{
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      });
      this.componentDidMount()
  }
  render() {
    return (
      <div className="App">
              <FriendForm onChange ={this.Change} onSubmit = {this.Submit}/>
              <Friendlist friends = {this.state.friends}/>
      </div>
    );
  }
}

export default App;
