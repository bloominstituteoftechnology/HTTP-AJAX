import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import './App.css'
import FriendsList from './components/FriendsList'
import { makeFetch, makePost } from './utils'
import AddFriendForm from './components/AddFriendForm'

const helper = makeFetch('http://localhost:5000')
const post = makePost('http://localhost:5000')

const FriendsListWrapper = props => <FriendsList friends={props.friends} />

FriendsListWrapper.propTypes = {
  friends: PropTypes.array.isRequired
}

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      friends: []
    }
    document
      .getElementById('root')
      .addEventListener('stateChanged', () => this.getCurrentState())
  }

  getCurrentState () {
    helper('/friends').then(({ data }) =>
      this.setState(prevState => ({ friends: [...data] }))
    )
  }

  componentDidMount () {
    this.getCurrentState()
  }

  setNewState (newState) {
    post('/friends', { ...newState }).then(() => this.getCurrentState())
  }

  render () {
    return (
      <div className='App'>
        <Route
          path='/'
          render={props => (
            <div>
              <AddFriendForm
                onStateChange={param => {
                  this.setNewState(param)
                }}
              />
              <FriendsListWrapper friends={this.state.friends} />
            </div>
          )}
        />
      </div>
    )
  }
}

export default App
