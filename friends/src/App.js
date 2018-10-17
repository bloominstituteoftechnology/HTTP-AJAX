import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Form from './components/form';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')  
      .then(response => {this.setState({ friends: response.data}) } //data defined?
      )
      //.then(response => console.log(response))
      .catch(err => {console.log(err)
      })
  };
//get takes string as parameter, ie a url. 
//axios creates promise
//put data you want on state.  response.data is the array of friends.

  

  addNewFriend = (newFriend) => {
    axios.post('http://localhost:5000/friends', newFriend)  //passing an obj as new post request
      .then(response => {   //after request sent, axios gives us promise, THEN consumes promise
        //this.setState({ friends: response.data}) 
        console.log(response.data)
      })
      .catch(err => {
        console.log(err);
      })
      //set state as empty string
  }

  //deleteFriend

  render() {
    return (
      <div className="App">
        <h1 className="app-title">Friends</h1>
          <Form formSubmitHandler={this.addNewFriend} />
      </div>
    );
  }
}

export default App;
