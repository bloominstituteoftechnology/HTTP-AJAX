import React, { Component } from 'react';
import axios from 'axios';
import AddFriend from './addfriend'
class FriendsList extends Component {
    constructor(){
        super ();
    this.state = {
        friends:[]
    }
}

        componentDidMount(){
            axios.get('http://localhost:5000/friends')
              .then(response => {
                console.log(response);
                this.setState({friends: response.data});
              })
              .catch(err => {
                console.log(err);
              });
          };
        
        
    render() {return (<div><div>{this.state.friends.map(friend => {
        return <div key={friend.id}>{`${friend.name} ${friend.age} ${friend.email}`}</div>
        
    })}</div>
    <AddFriend/>
    </div>)
    }
}
  export default FriendsList;