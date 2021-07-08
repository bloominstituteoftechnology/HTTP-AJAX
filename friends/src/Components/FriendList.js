import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ReactDom from "react-dom";
import axios from "axios";
import EditFriendForm from "./EditFriend";


class FriendList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditForm: false,
            editedFriend: ""
        }
    }
    
    toggleForm = () => {
        this.setState({ showEditForm: !this.state.showEditForm });
    };
    editFriendHandler = e => {
        this.setState({ editedFriend: e.target.value });
    };
    saveEditFriend = () => {
        const newFriend = { newFriend: this.state.editedFriend }; // create our edits object
        axios
            .put(
            `http://localhost:5000/friends/${this.props.friend.id}`,
            newFriend
            )
            .then(response => {
            console.log(response);
            this.props.handleSetData(response.data);
            })
            .catch(error => console.log(error)); // send up our edits to the server using a put
    };
    
    render() {

        return (
            <div className="friendsWrapper" >
                {this.props.friends.map(friend => (
                    <div className="friendWrap" >
                    <div>name: {friend.name}</div>  
                    <div>age: {friend.age}</div>
                    <div>email: {friend.email}</div>
                    {this.state.showEditForm ? (
          <EditFriendForm
            submitEdits={this.saveEditFriend}
            friendName={friend.name}
            editHandler={this.editFreindHandler}
          />
        ) : null}
        <button onClick={this.toggleForm}>Show edit form</button>
                    </div>
                )
            ) }
            </div>
        );
        }
};

export default FriendList;