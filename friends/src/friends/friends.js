import React, { Component } from 'react';
import FriendForm from './friendsForm';

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
                                    <div><span>{friend.name}</span></div>
                                    <div><span>{friend.age}</span></div>
                                    <div><span>{friend.email}</span></div>
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