import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import './App.css'
import FriendsList from './components/FriendsList'
import { makeFetch } from './utils'
import AddFriendForm from './components/AddFriendForm'

const helper = makeFetch('http://localhost:5000')

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
  }
  setInitialState () {
    helper('/friends').then(({ data }) =>
      this.setState(prevState => ({ friends: [...data] }))
    )
  }

  componentDidMount () {
    this.setInitialState()
  }

  setNewState (newState) {
    this.setState(previousState => Object.assign(previousState, newState))
  }

  render () {
    return (
      <div className='App'>
        <Route
          path='/'
          render={props => (
            <div>
              <AddFriendForm onStateChange={(param)=>{this.setNewState(param)}}/>
              <FriendsListWrapper friends={this.state.friends} />
            </div>
          )}
        />
      </div>
    )
  }
}

export default App
