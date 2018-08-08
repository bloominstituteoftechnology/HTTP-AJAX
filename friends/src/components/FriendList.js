import React, {Component} from 'react';
import axios from 'axios';
import Friend from './Friend';

const url = 'http://localhost:5000/friends';

class FriendList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            friends: [],
            loading: true
         }     
    }

  

componentDidMount () {
    axios.get(url)
    .then(response => {
        this.setState({
            friends: response.data,
            loading: false,
        });
    });
}

    render() { 
        return ( 
            <div className="wrap">
                {this.state.friends.map(friend => (
                   <Friend
                   key={friend.id}
                   name={friend.name}
                   age={friend.age}
                   email={friend.email}
                   />
                ))}
            </div>
         );
    }
}
 
export default FriendList;