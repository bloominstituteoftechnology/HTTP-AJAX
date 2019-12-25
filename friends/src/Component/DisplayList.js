import React, { Component } from 'react';
import axios from 'axios';
import FriendCard from './FriendCard'

class DisplayList extends Component{
    constructor(props) {
        super(props);
        this.state = {
          friends: null
        };
      }

componentDidMount() {
    this.fetchFriends();
}

fetchFriends = () => {
    axios
      .get(`http://localhost:5000/friends`)
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
  };


  refreshFriends = (response) => {
    this.setState(() => ({ friends: response.data }));
  }

  render(){
    if (!this.state.friends) {
        return <div>Loading friends information...</div>;
    }

    return(
        <div>
            <FriendCard refresh = {this.refreshFriends} boo = {this.state.friends} />
        </div>
    )
    
  }

}
export default DisplayList;