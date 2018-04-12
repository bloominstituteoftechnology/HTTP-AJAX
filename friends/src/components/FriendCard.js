import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardText } from 'reactstrap'

// const RemoveButton = (id) => {
//     return (
//         <button onClick={() => this.handleDeleteFriend(id)}>Remove Friend</button>
//     )
// }

export default class FriendCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            friend: this.props.friend
        }
    }

    handleDeleteFriend = (id) => {
        axios
            .delete(`http://localhost:5000/friends/${id}`)
            .then(response => {
                   this.setState(() => ({ friends: response.data }));
                })
            .catch(error => {
                console.log(error);
            })
            console.log(this.props);
        // haven't figured out how to make a button inside friendCard update the state after deletion. Delete works but you have to refresh the page to see the effect of it.
        // this.props.getFriends();
    };

    render() {
        const { id, name, age, email } = this.state.friend;
        return (
            <Card>
                <CardHeader>
                    <Link to={`/friends/${id}`}>
                        {name}
                    </Link>
                    <br />
                    {/* button for when I get it working */}
                    {/* <button onClick={() => this.handleDeleteFriend(id)}>Remove Friend</button> */}
                    {/* <RemoveButton id={id} /> */}
                </CardHeader>
                <CardBody className="text-left">
                    <CardText>Age: {age}</CardText>
                    <CardText>Email: {email}</CardText>
                    <CardText>Id: {id}</CardText>
                </CardBody>
            </Card>
        )
    }
}