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
      .then(response => this.setState({ friends: response.data }))
      .then( () => { console.log(this.state) })
      .catch (err => console.log(err));
  }


  handleInput (e) {
    this.setState({
      //[e.target.name] is a varible that is making reference to the contents in the name attribute of our input element in FriendsForm.js. We're setting the variables value to the value attribute present in the the same input element.
      [e.target.name]: e.target.value
    }) 
  }

  handleSubmit (e) {
    e.preventDefault(); //called to prevent the page from refreshing upon hitting submit button
    
    let newFriendArray = {
      name: this.state.name,
      email: this.state.email,
      age: this.state.age
    }
    axios.post('http://localhost:5000/friends')
      .then(response => {
        response.data.slice(); //sliced into a new array in order to not overwrite original state
      })
      this.setState({  
        friends: newFriendArray,
        name: "", 
        email: "",
        age: ""
      })

  }


  render() {

    const { friends } = this.state;
    console.log(friends);

    return (
      <div className="App">
        <FriendsForm name={this.state.name} email={this.state.email} age={this.state.age} input={this.handleInput.bind(this)} submit={this.handleSubmit.bind(this)}/>
        <FriendsWrapper friends={friends}/>
      </div>
    );
  }
}

export default App;
