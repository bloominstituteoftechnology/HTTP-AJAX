import React, { Component } from 'react';
import axios from 'axios';
// import { Card, CardHeader, CardBody, CardText } from 'react-strap'

export default class Friend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: [],
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/friends')
            .then(response => {
                this.setState(() => ({ friends: response.data }));
            })
            .catch(error => {
                console.error('Server Error', error);
            });
    }

    render() {
        return (
            <div>
                {this.state.friends.map(friend => {
                    const { id, name, age, email } = friend;
                    return (
                        <div>
                            <div>{friend.name}</div>
                            <div>{friend.age}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

// function FriendDetails({ friend }) {
//     const { id, name, age, email } = friend;
// }