import React, {Component} from 'react';

import axios from 'axios';
import './Friends.css';

class FriendsList extends Component {
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
                console.log(response);
                this.setState({ friends: response.data });
                
            })
            .catch(err => console.log(err));
            console.log(this.state.friends);
    }

    render() {
        return(
           <div className='friends-list'>
               {this.state.friends.map(friend => (
                <div className='friend' key={friend.id}>
                    <p>Name: {friend.name}</p>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                </div>
               ))}
           </div>
            
        );
    }

   
}

export default FriendsList;