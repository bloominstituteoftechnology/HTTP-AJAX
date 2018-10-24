import React from 'react'
import Friend from './Friend';


class FriendList extends React.Component {

    render() {
        return (
            <div className="friendInfo">
                {this.props.friends.map(obj => {
                    return (
                       
                            <Friend key={obj.id} friends={obj} />
                        
                    );
                })}
            </div>
        );
    }
}

export default FriendList