import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Form from './Components/Form';


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
        {this.state.data.map( friend => {
          return <div>{friend.name}</div>
        })}
        <Form />
        
      </div>
    );
  }
}

export default App;
