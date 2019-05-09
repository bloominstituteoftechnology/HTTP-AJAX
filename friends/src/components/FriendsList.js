import React from 'react';
//import ReactDOM from 'react-dom';
import axios from 'axios';
import Friend from './Friend';
import './FriendsList.css';

class FriendList extends React.Component {

    constructor() {
        super();
        this.state = {
            friends: []
        };
    }

    componentDidMount() {
        axios
        .get('http://127.0.0.1:5000/friends')
        .then(res => {
            console.log(res);
            this.setState(() => ({ friends: res.data }))
        })
        .catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
          <div className="friends-list">
          {
              this.state.friends.map(friend => {
                  return(
                    <Friend key={friend.id}  friend={friend} />
                  )
              })
          }
          </div>
        )};

};

export default FriendList;

