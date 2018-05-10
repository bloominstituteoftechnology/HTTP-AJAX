import React, { Component } from 'react';
import AddForm from "./AddForm";
import "./AddForm.css";
import UpdateProfile from "./UpdateProfile";




export default class App extends Component {

    constructor() {
        super();


    }


    render() {
        return (
            <div>
                <h2>FriendsList</h2>
                {this.props.friends.map((friend, index) => {
                    return (
                        <div key={friend.id}>
                            <div className="profile">
                                <p>Name: {friend.name}</p>
                                <p>Age: {friend.age}</p>
                                <p>Email: {friend.email}</p>
                            </div>
                            <div className="update-form" >
                                <UpdateProfile
                                input={this.props.input}
                                id={friend.id}
                                update={this.props.update}
                                />
                            </div>
                            <button name={friend.id} onClick={(e) => this.props.delete(e)}>Delete</button>
                        </div>
                    )
                })}
            </div>
        );
    }
}