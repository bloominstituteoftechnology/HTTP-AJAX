import React from 'react';
import axios from 'axios';
import './FriendCard.css';

class FriendCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nameBeingEdited: false,
            ageBeingEdited: false,
            emailBeingEdited: false
        }
    }

    deleteFriend = (id) => {
        axios.delete(`http://localhost:5000/friends/${id}`)
            .then(response => {
                this.props.updateState(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    toggleUpdate = (elementEdited) => {
        this.setState(prevState => ({
            [elementEdited]: !prevState[elementEdited]
        }));
    }

    render() {
        return (
            <div className="friend-card">
                <div className="friend-card-delete" onClick={() => this.deleteFriend(this.props.friend.id)}>x</div>
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" />
                <div className="friend-card-content">
                    <h1>Name:</h1> {(this.state.nameBeingEdited) ? <form><input type="text" placeholder={this.props.friend.name} autoFocus="true" onBlur={() => this.toggleUpdate('nameBeingEdited')}/></form> : <span onDoubleClick={() => this.toggleUpdate('nameBeingEdited')}>{this.props.friend.name}</span>}
                    <h1>Age:</h1>{(this.state.ageBeingEdited) ? <form><input type="text" placeholder={this.props.friend.age} autoFocus="true" onBlur={() => this.toggleUpdate('ageBeingEdited')} /></form> : <span onDoubleClick={() => this.toggleUpdate('ageBeingEdited')}>{this.props.friend.age}</span>}
                    <h1>Email:</h1>{(this.state.emailBeingEdited) ? <form><input type="text" placeholder={this.props.friend.email} autoFocus="true" onBlur={() => this.toggleUpdate('emailBeingEdited')} /></form> : <span onDoubleClick={() => this.toggleUpdate('emailBeingEdited')}>{this.props.friend.email}</span>}
                </div>
            </div>
        );
    }
}

export default FriendCard;