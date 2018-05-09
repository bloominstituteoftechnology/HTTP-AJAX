import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendsWrapper from './components/FriendsWrapper';
import FriendsForm from './components/FriendsForm';

class App extends Component {

  constructor() {
    super();
    this.state = {
      friends: [],
      name: "",
      email: "",
      age: 0
    }
  }

  componentDidMount () {
    axios.get('http://localhost:5000/friends')
      .then(response => this.setState({friends:response.data}))
      .then( () => { console.log(this.state)})
      .catch (err => console.log(err));
  }


  handleInput (e) {

    this.setState({
      [e.target.name]: e.target.value
    }) 
    
  }


  render() {

    const { friends } = this.state;
    console.log(friends);

    return (
      <div className="App">
        <FriendsForm name={this.state.name} email={this.state.email} age={this.state.age}/>
        <FriendsWrapper friends={friends}/>
      </div>
    );
  }
}

export default App;
