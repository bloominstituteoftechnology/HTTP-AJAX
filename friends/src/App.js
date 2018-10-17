import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: []
    }
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(response => {
      this.setState({ notes: response.data })
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div className="App">
          <div className='friends'>{this.state.notes.map(friends => {
            return ` ${friends.name} ${friends.age}, `;
          })}</div>
      </div>
    );
  }
}

export default App;
