import React from 'react';
import axios from 'axios';
import './FriendCard.css';

class FriendCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nameBeingEdited: false,
            nameValue: props.friend.name,
            ageBeingEdited: false,
            ageValue: props.friend.age,
            emailBeingEdited: false,
            emailValue: props.friend.email
        }
    }

    deleteFriend = () => {
        axios.delete(`http://localhost:5000/friends/${this.props.friend.id}`)
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

    handleUpdateSubmit = (event, valueBeingEdited) => {
        event.preventDefault();
        if (document.activeElement.value) {
            this.setState(() => ({
                [valueBeingEdited]: valueBeingEdited === "ageValue" ? Number(document.activeElement.value) : document.activeElement.value
            }),
                () => {
                    console.log(this.state);

                    axios.put(`http://localhost:5000/friends/${this.props.friend.id}`, {
                        id: this.props.friend.id,
                        name: this.state.nameValue,
                        age: this.state.ageValue,
                        email: this.state.emailValue
                    })
                        .then(response => {
                            console.log(response.data);
                            this.props.updateState(response.data);
                            document.activeElement.blur();
                        })
                        .catch(err => console.log(err));
                }
            );
        } else {
            document.activeElement.blur();
        }
    }

    render() {
        return (
            <div className="friend-card">
                <div className="friend-card-delete" onClick={() => this.deleteFriend()}>x</div>
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" />
                <div className="friend-card-content">
                    <h1>Name:</h1> {(this.state.nameBeingEdited) ? <form onSubmit={(event) => this.handleUpdateSubmit(event, 'nameValue')}><input type="text" placeholder={this.props.friend.name} autoFocus={true} onBlur={() => this.toggleUpdate('nameBeingEdited')} /></form> : <span onDoubleClick={() => this.toggleUpdate('nameBeingEdited')}>{this.props.friend.name}</span>}
                    <h1>Age:</h1>{(this.state.ageBeingEdited) ? <form onSubmit={(event) => this.handleUpdateSubmit(event, 'ageValue')}><input type="number" placeholder={this.props.friend.age} autoFocus={true} onBlur={() => this.toggleUpdate('ageBeingEdited')} /></form> : <span onDoubleClick={() => this.toggleUpdate('ageBeingEdited')}>{this.props.friend.age}</span>}
                    <h1>Email:</h1>{(this.state.emailBeingEdited) ? <form onSubmit={(event) => this.handleUpdateSubmit(event, 'emailValue')}><input type="text" placeholder={this.props.friend.email} autoFocus={true} onBlur={() => this.toggleUpdate('emailBeingEdited')} /></form> : <span onDoubleClick={() => this.toggleUpdate('emailBeingEdited')}>{this.props.friend.email}</span>}
                </div>
            </div>
        );
    }
}

export default FriendCard;