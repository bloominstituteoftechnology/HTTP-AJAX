import React, { Component } from 'react';
   

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
                        <div>
                            <p>Name: {friend.name}</p>
                            <p>Age: {friend.age}</p>
                            <p>Email: {friend.email}</p>
                        </div>
                    )
                })}
            </div>
        );
    }
}