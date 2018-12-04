import React, { Component } from 'react';
import axios from 'axios';

export default class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  /*
  fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        this.setState(() => ({ movie: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
  };
  */

  render() {
    console.log(this.state.friends);
    if (this.state.friends === null) {
      return <div>Loading friends...</div>;
    }

    //const { title, director, metascore, stars } = this.state.movie;
    return (
      <div className="friends-wrapper">
         {this.state.friends.map(friend => (
          <div className="friend" key={friend.id} friend={friend.name} >{friend.name}</div>
        ))}
      </div>
    );
  }
}
