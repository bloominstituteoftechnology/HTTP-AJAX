import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Form from './Components/Form';
import Friend from './Components/Friend';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount= () => {
    axios
    .get(`http://localhost:5000/friends`)
    .then ( response => {
      this.setState({data: response.data})
    })
    .catch( err=> console.log(err))
  }



  render() {
    return (
      <div className="App">
       
        <Form  />

        {this.state.data.map(friend => (
          <Friend friend={friend} />
        ))}
      </div>
    );
  }
}

export default App;
