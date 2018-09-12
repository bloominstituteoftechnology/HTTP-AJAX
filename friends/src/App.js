import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then((response) => {
        const friends = response.data;
        this.setState({ friends});
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Axios</h1>
      </div>
    )
  }
}

export default App
