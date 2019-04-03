import React, { Component } from 'react';
import axios from 'axios';
import FriendCard from './FriendCard';

class SingleFriendPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          friend: ''
        };
    }
    componentDidMount() {
        const id = Number(this.props.match.params.id);
        this.fetchFriend(id);
    }
    fetchFriend = id => {
    axios
        .get(`http://localhost:5000/friends/${id}`)
        .then(response => {
        this.setState(() => ({ friend: response.data }));
        })
        .catch(error => {
        console.error(error);
        });
    };
    render(props) {
        console.log(this.state.friend);
        return (
            <div className="friend-page-wrapper">
               <FriendCard friend={this.state.friend}/>
               <div>
                   <button>Edit</button>
                   <button>Delete</button>
               </div>
           </div>
       )
    }
}

export default SingleFriendPage;