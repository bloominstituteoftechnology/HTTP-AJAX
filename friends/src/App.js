import React, { Component } from 'react';
import Friends from './component/Friends.js';
import axios from 'axios';
import Form from './component/Form.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() { //found in help channel
    axios.get('http://localhost:5000/friends')
    .then(response => {
      const friends = response.data;
      this.setState({friends});
    })
    .catch(error => console.log(error))
  }



  render() {
    return (
      <div>
      <Friends friends={this.state.friends} />
      <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
