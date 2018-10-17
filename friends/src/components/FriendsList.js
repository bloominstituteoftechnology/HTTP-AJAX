import React from 'react';
import axios from 'axios';

import Friends from './Friends'


class FriendsList extends React.Component {
    constructor() {
        super();
        this.state = {
            friends: []
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/friends')
            .then(response => this.setState({ friends: response.data}))
            .catch(error => console.log(error))
    }

    render() {
        {if (this.state.friends.length < 1) {
            return (
                <h2>Loading...</h2>
            )
        } else {
            return(
                this.state.friends.map(friend => {
                    return (
                        <div key={friend.id}>
                            <Friends friend={friend} />
                        </div>
                    )
                })
            )
        }}
    }
}
 
export default FriendsList;