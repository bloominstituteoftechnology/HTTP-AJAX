import React, { Component } from 'react'
import axios from 'axios'
import Card from './components/Card'

class App extends Component {
  state = {
    friends: []
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    const { friends } = this.state

    return (
      <div>
        {friends.length &&
          friends.map((friend, i) => <Card key={i} {...friend} />)}
      </div>
    )
  }
}

export default App
