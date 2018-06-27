import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsData: [],
      name: "",
      age: "",
      email: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        console.log('get response:', response);
        this.setState({friendsData: response.data});
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleSubmitFriend = () => {
    const name = { name:this.state.name };
    axios
     .post("http://localhost:5000/friends", name)
     .then(response => {
       console.log("POST RESPONSE", response);
       this.setState({ friendsData: response.data });
     })
     .catch(error => console.log(error));
  };


  render() {
    return (
      <div className="App">
      <h1>List of Friends</h1>

      </div>
    );
  }
}

export default App;
