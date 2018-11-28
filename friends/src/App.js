import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import MyForm from './components/MyForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        console.log(response)
        this.setState({ 
          data: response.data
          // data: response.data.message 
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        {this.state.data.map(item => (
        <li>{item.name}</li>
        ))}
        <MyForm />
      </div>
    );
  }
}

export default App;
