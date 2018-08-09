import React, { Component } from 'react';
import './App.css';
import Friendlist from './components/friendlist.js'
import FriendForm from './components/FriendForm.js'
import axios from "axios";

const url = "http://localhost:5000/friends";

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [ ]
    }
  }
  componentDidMount(){
      axios
          .get(url)
            .then(response =>{
              this.setState({
                friends: response.data
              })
            })
  }
  change = a => {
    let change = {}
 change[a.target.name] = a.target.value
 this.setState(change)
  }

  submit = a => {
      a.preventDefault();
    axios
      .post(url,{
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      });
      this.componentDidMount()
  }
  render() {
    return (
      <div className="App">
              <FriendForm onChange={this.change} onSubmit={this.submit} data = {this}/>
              <Friendlist friends={this.state.friends}/>
      </div>
    );
  }
}

export default App;
