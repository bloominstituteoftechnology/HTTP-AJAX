import React from "react";
import Friend from './Friend';

import "../App.css";


class FriendList extends React.Component {
    render() {
        return (
            <div className='card-container'>
                {this.props.friends.map(friend => {
                    return (
                        <div >
                            <Friend key={friend.id} friend={friend} deleteFriendFromList={this.props.deleteFriendFromList} />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default FriendList;