import React from 'react';
import EditFriends from './editFriends';
import axios from 'axios';


class Friends extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editFriend: false,
            editName: '',
            editAge: '',
            editEmail: ''
        }
    }



    openEditForm = () => {
        this.setState({ editFriend: !this.state.editFriend });
    };


    editHandler = event => {
        this.setState({ [event.target.name]: event.target.value })
    }


    deleteFriend = event => {
        event.preventDefault();
        axios.delete(`http://localhost:5000/friends/${this.props.friend.id}`).then(response => {
            console.log('DELETE RESPONSE', response);
            this.props.deleteFriendHandle(response.data)
        })
            .catch(err =>
                console.log(err));
    }

    saveEdits = (event) => {
        event.preventDefault();
        const friendIndex = { name: this.state.editName, age: this.state.editAge, email: this.state.editEmail }
        axios.put(`http://localhost:5000/friends/${this.props.friend.id}`, friendIndex).then(response => {
            console.log("PUT RESPONSE", response);
            this.props.editFriendHandle(response.data)
        })
            .catch(err =>
                console.log(err));
    }


    render() {
        return (

            <div className='friend'>
                <div className={this.props.friend.id}>
                    <h2>Name: {this.props.friend.name}</h2>
                    <p>Age: {this.props.friend.age}</p>
                    <p>Email: {this.props.friend.email}</p>
                    {this.state.editFriend ? (
                        <EditFriends friend={this.props.friend}
                            editFriendHandler={this.editHandler}
                            saveEdits={this.saveEdits}
                        />
                    ) : null}
                </div>
                <button onClick={this.openEditForm} className='editButton'>Edit</button>
                <button onClick={this.deleteFriend} className='editButton'>Delete</button>
            </div>
        )

    }

}

export default Friends;