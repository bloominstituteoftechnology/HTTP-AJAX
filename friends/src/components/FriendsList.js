import React, { Component } from 'react';

import FriendCard from './FriendCard';
import { ListContainer } from './FriendsStyles';

class FriendsList extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <ListContainer>
                {this.props.friends.map((e, i) => {
                    return (
                        <FriendCard deleteFriend={this.props.deleteFriend} updateFriend={this.props.updateFriend} populateFriend={this.props.populateFriend} friend={e} key={i}/>
                    )
                })}
            </ListContainer>
        )
    }
}

export default FriendsList;