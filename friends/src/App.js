import React, { Component } from 'react'
import axios from 'axios'
import Card from './components/Card'
import { ContentWrapper } from './styles/Global'

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
      <ContentWrapper>
        {friends.length &&
          friends.map((friend, i) => <Card key={i} {...friend} />)}
      </ContentWrapper>
    )
  }
}

export default App
