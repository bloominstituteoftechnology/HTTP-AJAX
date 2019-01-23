import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import Friend from '../component/Friend';
import AddFriend from '../component/AddFriend';
import { FriendsWrapper, BtnWrapper, Btn } from '../styles/friendStyles';

class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      friends: []
     }
  }

  componentDidMount = () => {
    axios.get("http://localhost:5000/friends")
    .then (res => {
      console.log(res.data);
      this.setState({friends: res.data});
    })
    .catch (err => {
      console.log(err);
    })
  }

  addFriend = (friend) => {
    if(!friend.name || !friend.age || !friend.email) return;
    const info = {
      name: friend.name,
      age: friend.age,
      email: friend.email
    };
    axios.post('http://localhost:5000/friends', info)
    .then( (res) => {
      console.log(res);
      this.setState({friends: res.data})
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() { 
    return ( 
      <div>
        <FriendsWrapper>
            {this.state.friends.map(friend => <Friend  key={friend.id} friend={friend} />)}
        </FriendsWrapper>
        <BtnWrapper><Btn onClick={() => this.props.history.push("/add")}>Add Friend</Btn></BtnWrapper>
        <Route path="/add" render={(props) => <AddFriend addFriend={this.addFriend} {...props}/>} />
      </div>
     );
  }
}
 
export default Friends;