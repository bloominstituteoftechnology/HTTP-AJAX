import React, { Component, Fragment } from 'react'
import axios from 'axios'
import Form from './components/Form'
import Card from './components/Card'
import { FormWrapper, CardsWrapper } from './styles/Global'

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
      <Fragment>
        <FormWrapper>
          <Form />
        </FormWrapper>
        <CardsWrapper>
          {friends.length &&
            friends.map((friend, i) => <Card key={i} {...friend} />)}
        </CardsWrapper>
      </Fragment>
    )
  }
}

export default App
