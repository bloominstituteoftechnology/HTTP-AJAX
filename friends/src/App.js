import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'
import FriendsList from './components/FriendsList'

class App extends Component {
  constructor(){
    super();
    this.state = {
      nameText: "",
      ageText: "",
      emailText: ""
    }
    this.nameHandler = this.nameHandler.bind(this);
    this.ageHandler = this.ageHandler.bind(this);
    this.emailHandler = this.emailHandler.bind(this);
  }
  
  nameHandler(ev) {
    ev.preventDefault();
    this.setState({
      nameText: ev.target.value
    })
  }

  ageHandler(ev) {
    ev.preventDefault();
    this.setState({
      ageText: ev.target.value
    })
  }

  emailHandler(ev) {
    ev.preventDefault();
    this.setState({
      emailText: ev.target.value
    })
  }

  render() {
    return (
      <div className="App">
      <Form 
      nameHandler={this.nameHandler}
      ageHandler={this.ageHandler}
      emailHandler={this.emailHandler}
      />

      <FriendsList />
      </div>
    );
  }
}

export default App;
