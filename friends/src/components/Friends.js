import React, { Component } from 'react';
import FriendForm from './FriendsForm';

class Friends extends Component{
    constructor(props){
        super();
        this.state = {
            editClick: false,
            editId: null
        };
    }

    updateFriend = (id) => {
        this.setState({
            editClick: !this.state.editClick,
            editId: id
        })
    }

    render(){
        return(
            <div className='friendsList'>
                {this.props.friends.map(friend => (
                    <div key={friend.id}>
                        {this.state.editId === friend.id ? (
                            <FriendForm edit={this.props.editFriend} id={friend.id}/>
                        ) : (   <div>
                            <div>{friend.name}</div>
                            <div>{friend.age}</div>
                            <div>{friend.email}</div>
                            <button onClick={() => this.props.deleteFriend(friend.id)}>Delete</button>
                            <button onClick={() => this.updateFriend(friend.id) }>Edit</button>
                        </div>)
                        }
                    </div>
                ))}
            </div>
        )

    }

}

export default Friends;