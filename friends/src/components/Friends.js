import React, { Component } from 'react';
import axios from 'axios';
import { Container, Card, CardHeader, CardBody, CardText, Col, Row } from 'reactstrap'

export default class Friend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: [],
            newFriend: {
                id: '',
                name: '',
                age: '',
                email: '',
            },
        }
    }

    componentDidMount = () => {
        // this.state.newFriend.id = this.state.friends[this.state.friends.length - 1].id + 1;
        // this.state.newFriend.id = 3;
        axios
            .get('http://localhost:5000/friends')
            .then(response => {
                this.setState(() => ({ friends: response.data }));
            })
            .catch(error => {
                console.error('Server Error', error);
            });
    }

    handleAddFriend = e => {
        console.log(e.target)
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div className="App mt-5">
                <h1>Friendslist</h1>
                <Container className="mt-5">
                    {this.state.friends.map((friend, index) => {
                        const { id, name, age, email } = friend;
                        return (
                            <Card key={index}>
                                <CardHeader>{friend.name}</CardHeader>
                                <CardBody className="text-left">
                                    <CardText>Age: {friend.age}</CardText>
                                    <CardText>Email: {friend.email}</CardText>
                                    <CardText>Id: {friend.id}</CardText>
                                </CardBody>
                            </Card>
                        )
                    })}
                            <Card>
            <CardHeader>Name:
                <input
                    type="text"
                    name='newFriend'
                    value={this.state.newFriend.name}
                    placeholder="Add name..."
                    onChange={this.handleAddFriend}
                />
            </CardHeader>
            <CardBody className="text-left">
                <CardText>Age:

                </CardText>
                <CardText>Email:

                </CardText>
                <CardText>Id:

                </CardText>
            </CardBody>
        </Card>
                    {/* <NewFriendForm newFriend={this.state.newFriend} addFriend={this.handleAddFriend()} /> */}
                </Container>
            </div>
        )
    }
}

// function FriendDetails({ friend }) {
//     const { id, name, age, email } = friend;
// }

// const NewFriendForm = (newFriend, addFriend) => {
//     console.log(newFriend);
//     return (
//         <Card>
//             <CardHeader>Name:
//                 <input
//                     type="text"
//                     name="newFriend.name"
//                     value={newFriend.name}
//                     placeholder="Add name..."
//                     onChange={() => addFriend()}
//                 />
//             </CardHeader>
//             <CardBody className="text-left">
//                 <CardText>Age:

//                 </CardText>
//                 <CardText>Email:

//                 </CardText>
//                 <CardText>Id:

//                 </CardText>
//             </CardBody>
//         </Card>
//     );
// }