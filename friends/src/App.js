import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    console.log('I am a mounted teapot')
  
    axios
    .get("http://localhost:5000/friends")
    .then(res => {
      console.log(res)
      this.setState({ friends: res.date });
    })
    .catch(err => alert("Sorry something went wrong: ", err));
  }

  render() {
    return (
    <div className="App">
      <header className="App-header"/>
    </div>
    )
  };
}

export default App;