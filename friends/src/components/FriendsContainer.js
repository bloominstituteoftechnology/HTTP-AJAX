import React, { Component } from 'react';
import uuidv1 from 'uuid/v1';
import axios from 'axios';


export default class FriendsContainer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      friends: [],
      isLoading: false,
    }
  }

  fetchFriends = () => {
    this.setState({isLoading: true})
    axios.get('http://localhost:5000/friends/')
      .then(response => {
        this.setState({
          friends: response.data,
        })
      })
      .catch(error => {
        error.response && console.error(error.response.statusText)
      })
      .finally(()=> this.setState({isLoading: false}))
  }

  componentDidMount() {
    this.fetchFriends();
  }

  render() {
    const { friends, isLoading } = this.state;
    return (
      <div>
        {isLoading && (<p>...Loading</p>)}
        {friends.map(friend => <p key={uuidv1()}>{friend.name}</p>)}
      </div>
    )
  }
}
