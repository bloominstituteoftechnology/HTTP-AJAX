import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import Friend from '../component/Friend';
import InfoForm from '../component/InfoForm';
import { FriendsWrapper, BtnWrapper, Btn } from '../styles/friendStyles';

class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      friends: [],
      updatedFriend: {}
     }
  }

  componentDidMount = () => {
    axios.get("http://localhost:5000/friends")
    .then (res => {
      this.setState({friends: res.data});
    })
    .catch (err => {
      console.log(err);
    })
  }

  addFriend = (friend) => {
    // if(!friend.name || !friend.age || !friend.email) return;
    const info = {
      name: friend.name,
      age: friend.age,
      email: friend.email
    };
    axios.post('http://localhost:5000/friends', info)
    .then( (res) => {
      this.setState({friends: res.data})
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  deleteFriend = (id) => {
    const url = `http://localhost:5000/friends/${id}`;
    axios.delete(url)
    .then( res => {
      this.setState({friends: res.data})
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  GetUpdatedInfo = (id, friend) => {
    this.setState({updatedFriend: friend});
    this.props.history.push(`/update/${id}`);
  }

  updateFriend = (friend, id) => {
    const url = `http://localhost:5000/friends/${id}`;
    axios.put(url, friend)
    .then( (res) => {
      this.setState({friends: res.data})
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() { 
    return ( 
      <div>
        <FriendsWrapper> {this.state.friends.map(friend => 
              <Friend 
                key={friend.id} 
                friend={friend} 
                update={this.GetUpdatedInfo}
                delete={this.deleteFriend}
              />)}
        </FriendsWrapper>
        <BtnWrapper><Btn onClick={() => this.props.history.push("/add")}>Add Friend</Btn></BtnWrapper>
        <Route path="/add" render={(props) => <InfoForm action={this.addFriend} {...props} message={`Adding friend`}/>} />
        <Route path="/update/:id" render={props => <InfoForm {...props} action={this.updateFriend} message={`Updating friend`} info={this.state.updatedFriend}/>} />
      </div>
     );
  }
}
 
export default Friends;