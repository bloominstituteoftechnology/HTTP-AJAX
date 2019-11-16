import React from 'react';
import './FriendsList.css';
import axios from 'axios';

class Friend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditForm: false,
            editedFriends: "",
            editedName: "",
            editedAge: "",
            editedEmail: ""
        }
    }

    toggleForm = () => {
        this.setState({ showEditForm: !this.state.showEditForm })
    }
    editFriendName = e => {
        this.setState({ editedName: e.target.value })
    }
    editFriendAge = e => {
        this.setState({ editedAge: e.target.value })
    }
    editFriendEmail = e => {
        this.setState({ editedEmail: e.target.value })
    }
    saveEditFriend = () => {
        console.log("response")
        const friend = { name: this.state.editedName, age: this.state.editedAge, email: this.state.editedEmail }
        axios.put(`http://localhost:5000/friends/${this.props.friend.id}`, friend)
        .then(response => {
            console.log("response");
            this.props.handleSetData(response.data);
        })
        .catch(error => console.log(error))
    }

    render() {
        return (
            <div className="friend">
                <p>Name: {this.props.friend.name}</p>
                <p>Age: {this.props.friend.age}</p>
                <p>Email: {this.props.friend.email}</p>
                {this.state.showEditForm ? (
                    <form>
                        <input 
                            placeholder="edit name"
                            type="text"
                            onChange={this.editFriendName}
                            name="editedName"
                        />
                        <input 
                            placeholder="edit age"
                            type="number"
                            onChange={this.editFriendAge}
                            name="editedAge"     
                        />
                        <input 
                            placeholder="edit email"
                            type="text"
                            onChange={this.editFriendEmail}
                            name="editedEmail"
                        />
                        <button onClick={this.saveEditFriend}>Change</button>
                    </form>
                ) : null }
                <button onClick={() => this.props.handleDeleteFriend(this.props.friend.id)}>Delete</button>
                <button onClick={this.toggleForm}>Show edit Form</button>
            </div>
        )
    }


}

export default Friend;