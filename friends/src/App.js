import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      friends: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
         .then(res => {
           console.log(res);
           this.setState({ friends: res.data })
         })
         .catch(err => console.log(err));
  }

  render() {
    const bold = {
      fontWeight: 'bold',
    }

    return (
      <div className="App">
        {this.state.friends.map(friend =>
          <div className='friend-card'>
            <h1>{friend.name}</h1>
            <p><span style={bold}>Age:</span> {friend.age}</p>
            <p><span style={bold}>Email:</span> {friend.email}</p>
          </div>)}
      </div>
    );
  }
}

export default App;
