import React, { Component } from 'react';
import axios from 'axios';
import  Friend from './Friend';

export default class IndividualFriend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFriend: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchFriend(id);
  }

  fetchFriend = id => {
    axios
      .get(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState(() => ({ selectedFriend: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
  };
   

render() {
    if (!this.state.selectedFriend) {
      return <div>Loading...</div>;
    }

    return (    <div className="list-container">
                <Friend deleteFriend ={this.props.deleteFriend} friend={this.state.selectedFriend}/>
                </div>
      );
  }
}



