import React from 'react'
import Friend from './Friend';
import { NavLink } from 'react-router-dom'


class FriendList extends React.Component {

    render() {
        return (
            <div className="friendInfo">
                <NavLink className="link" to='/'>
                    <button>Click to go back to Home/Friend add</button>
                </NavLink>
                {this.props.friends.map(obj => {
                    return (
                       
                            <Friend key={obj.id} friends={obj} delete={this.props.delete} />
                        
                    );
                })}
            </div>
        );
    }
}

export default FriendList