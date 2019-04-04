import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
    deleteFriend = () => {
        this.props.deleteFriend(this.state.friend.id);
    }
    render(props) {
        return (
            <div className="friend-page-wrapper">
               <FriendCard friend={this.state.friend}/>
               <div className="friend-page-controls">
                   <Link to={`/friends/${this.state.friend.id}/edit`}><button className='btn'>Edit</button></Link>
                   <Link to="/"><button className='btn' onClick={this.deleteFriend}>Delete</button></Link>
               </div>
           </div>
       )
    }
}

export default SingleFriendPage;