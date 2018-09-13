import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import FriendForm from './components/FriendForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: ''

    };
  }

  
  
  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends`)
      .then(response => {
        // console.log(response.data);
        this.setState({ friends: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  textInput = e => {
    this.setState({ [e.target.name]: e.target.value });
                  // { [e.target.age]: e.target.value },
                  // { [e.target.email]: e.target.value });
  };

  // saveFriendData = () => {
  //   const person = {name: this.state.name, age: this.state.age, email: this.state.email};

    // axios
    //   .post('http://localhost:5000/friends', person)

    //   .then(resonse => {
    //   console.log(response;
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    //  console.log(person); 
    // this.setState({name: '', age: '', email: ''});
  // };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my HTTP-AJAX Project</h1>
        </header>
        <FriendForm textInputHandler={this.textInput}/>
 
        <div className="friends-container">
          {this.state.friends.map(friend => <div className={"friend"} key={friend.id} friend={friend} >
            {/* Friend's Info Here */}
            <p>Name: {friend.name}</p>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
          </div>)}
        </div>
    
      </div>
    );
   
  }
}

export default App;
