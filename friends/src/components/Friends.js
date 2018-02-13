import React from 'react';
import EditForm from './EditForm';

class Friends extends React.Component {
    state = {
        name: '',
        age: '',
        email: '',
        editing: false,
    };
    toggleEdit = () => {
        this.setState({ editing: !this.state.editing });
    }
    render() {
        const onEditToggle = this.state.editing ? { display: 'none' } : { display: 'block' } ;
        return (
            <ul className="friends-container">
                {this.props.friends.map(friend => {
                    return (
                        <li key={friend.id} className="friend">
                            <div className="friend-name" style={onEditToggle}>{friend.name}</div>
                            <div className="friend-age" style={onEditToggle}> {friend.age}</div>
                            <div className="friend-email" style={onEditToggle}> {friend.email}</div>
                            <EditForm
                                editing={this.state.editing}
                                toggleEdit={this.toggleEdit}
                                id={friend.id}
                                getFriends={this.props.getFriends}
                                name={friend.name}
                                age={friend.age}
                                email={friend.email}
                            />
                            <button onClick={this.toggleEdit} style={onEditToggle} >Edit</button>

                            <button
                                onClick={() => {
                                    this.props.deleteFriend(friend.id);
                                }}
                                style={onEditToggle}
                            >
                                Unfriend
                            </button>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default Friends;
