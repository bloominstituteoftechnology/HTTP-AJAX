import React from "react";
import axios from "axios";
import Friend from "./Friend";
import Form from "./Form";
import { FrndBox } from './styles';

export default class Friends extends React.Component {
    constructor() {
    super();
    this.state = {
        friends: [],
        newFriend: {
        name: "",
        age: 0,
        email: ""
        }
    };
    }
    componentDidMount() {
        axios
        .get("http://localhost:5000/friends")
        .then(response => {
        this.setState({
            friends: response.data
        });
        })
        .catch(error => {
        console.log(error);
        });
    }

    inputChange = e => {
        e.preventDefault();
        this.setState({
            newFriend: {
                ...this.state.newFriend,
                [e.target.name]: e.target.value
            }
        });
    };

    numberInputChange = e => {
        e.preventDefault();
        this.setState({
            newFriend: {
                ...this.state.newFriend,
                [e.target.name]: parseInt(e.target.value)
            }
        });
    };

    addNewFriend = (e) => {
        e.preventDefault();
            axios
            .post("http://localhost:5000/friends", this.state.newFriend)
            .then(response => this.setState({friends: response.data}))
            .catch(error => console.log(error));

        this.setState({
            newFriend: {
            name: "",
            age: 0,
            email: ""
            }
        });
    };

    updateFriend = (friend) => {
        axios.put(`http://localhost:5000/friends/${friend.id}`, friend)
        .then(response => this.setState({friends: response.data}))
        .catch(error => console.log(error))
    };

    deleteFriend = (friend) => {
        axios.delete(`http://localhost:5000/friends/${friend.id}`)
        .then(response => this.setState({ friends: response.data}))
        .catch(error => console.log(error))
    }

    render() {
        return (
            <FrndBox>
                <h1>List of Friends</h1>
                {this.state.friends.map(friend => (
                    <Friend
                        key={friend.id}
                        friend={friend}
                        updateFriend={this.updateFriend}
                        deleteFriend={this.deleteFriend}
                    />
                ))}
                <Form
                    inputChange={this.inputChange}
                    addNewFriend={this.addNewFriend}
                    numberInputChange={this.numberInputChange}
                    newFriend={this.state.newFriend}
                />
            </FrndBox>
        );
    }
}