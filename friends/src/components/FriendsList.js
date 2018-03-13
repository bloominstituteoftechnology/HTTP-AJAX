import React, { Component } from 'react';
import axios from 'axios';

class FriendsList extends Component {

    state = {
        friends: [],
        newFriend: {
          name:'',
          age:'',
          email:''
        }
    };

    addFriend = (event) => {
      event.PreventDefault();
      const myFriendsList = this.state.friends;
      myFriendsList.push(this.state.newFriend);
      this.setState({
        newFriend: {
          name:'',
          age:'',
          email:''
        },
        friends: myFriendsList
      });
    };

    handleFriendInput = (event) => {
      this.setState({ newFriend: event.target.value });
    };

    componentDidMount() {
        axios
        .get('http://localhost:5000/friends')
        .then(response => {
            this.setState(()=> ({ friends: response.data }));
        })
        .catch(error => {
            console.error(`Server Error: ${error}`);
        });
    }

    render() {
        return (
          <div>
            <div className="friend-title"> My Lambda Friends</div>
            <ul className="friend-grid">
              {this.state.friends.map(friend => {
                return (
                  <li key={friend.id} className="friend">
                    <div className="friend-name">{friend.name}</div>
                    <div className="friend-age">{`Age: ${friend.age}`}</div>
                    <div className="friend-email">{`Email: ${friend.email}`}</div>
                  </li>
                );
              })}
            </ul>
            <div>
              <form onSubmit={this.addFriend}>
              <input type="text" onChange={this.handleFriendInput} placeholder="Add New Friend Here" value={this.state.newFriend} />
              </form>
              </div>
          </div>
        );
      }
    }
    
    export default FriendsList;
    