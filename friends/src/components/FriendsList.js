import React, { Component } from 'react';

import FriendCard from './FriendCard';
import { ListContainer } from './FriendsStyles';

class FriendsList extends Component {
    constructor(props){
        super(props);
    }

    render() {
        console.log(this.props)
        return (
            <ListContainer>
                {this.props.friends.map((e, i) => {
                    return (
                        <FriendCard friend={e} key={i}/>
                    )
                })}
            </ListContainer>
        )
    }
}

export default FriendsList;