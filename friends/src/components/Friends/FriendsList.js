import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';


import FriendCard from "./FriendCard";

import axios from 'axios';


class FriendsList extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
    };
  }

  componentDidMount() {
    axios     
    .get(`http://localhost:5000/friends`)
       .then(response => {
          this.setState({ friends: response.data });
       })
       .catch(err => {
         console.log(err);
       });
  }


  render() {
  return (
      <div>
        {this.state.friends.map(friend => {
          return (
            <Link to={`/friend/${friend.id}`} >
              <FriendCard key={friend.id} friend={friend} />
            </Link>
          );
        })}
      </div>
    );
  }
};

export default FriendsList;