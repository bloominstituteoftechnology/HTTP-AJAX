import React, { Component } from 'react';
const axios = require('axios');

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    }
  }
  componentDidMount() {
    console.log('component did mount!')
    axios
      .get('http://localhost:5000/friends')
        .then((response) => {
          console.log('Axios response received', response.data)
          this.setState({ data: response.data })

        })
        .catch((err) => {
          console.log('WARNING: error!', err)
        })
  }

  render() {
    console.log('Rendering')
    console.log('Updated state:', this.state.data)
    return (
      <div className="App">
        <h1>Testing</h1>
      </div>
    );
  }
}

export default App;
