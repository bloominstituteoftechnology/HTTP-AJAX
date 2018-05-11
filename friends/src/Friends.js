import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import Friend from "./Friend";

class Friends extends Component {
    state = {
        friends: [],
        name: "",
        age: "",
        email: ""
    };

    updateAll = () => {
        axios
            .get("http://localhost:5000/friends")
            .then(response => {
                this.setState({ friends: response.data });
            })
            .catch(err => {
                console.log(err);
            });
    }

    componentDidMount() {
        this.updateAll();
    }

    handleTextInput = event => {
        this.setState({
            [event.target.name]: event.target.value,
            [event.target.age]: event.target.value,
            [event.target.email]: event.target.value
        });
    };

    handleDeleteFriend = (id) => {
        axios
            .delete(`http://localhost:5000/friends/${id}`)
            .then(savedFriend => {
                this.updateAll();
            })
            
            .catch(err => {
                console.log
            })
    }

    saveFriendsData = (e) => {
        e.preventDefault();
        const friendData = { name: this.state.name, age: this.state.age, email: this.state.email }
        axios.post("http://localhost:5000/friends", friendData)
            .then(savedFriend => {
                this.updateAll();
            })
            .catch(err => {
                console.log(err)
            });
        this.setState({ name: '', age: '', email: '' })
    }


    render() {
        return <div>
            <div>
                {this.state.friends.map(friend => {
                    return (
                    <div>
                        <Link onClick={() => { this.props.updateFriend(friend) }} to={`/friends/${friend.id}`} >
                            <h2>{friend.name}</h2>
                        </Link>
                        <h2>{friend.age}</h2>
                        <h2>{friend.email}</h2>
                        <button onClick={() =>
                        this.handleDeleteFriend(friend.id)}>DELETE</button>
                    </div>);
                })}
            </div>
            <form class="new-friend">
                <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleTextInput} />
                <input type="text" placeholder="Age" name="age" value={this.state.age} onChange={this.handleTextInput} />
                <input type="text" placeholder="Email" name="email" value={this.state.email} onChange={this.handleTextInput} />
                <button onClick={this.saveFriendsData}>Save Friend</button>
            </form>
        </div>;
    }
}

function FriendsDeatils({ friend }) {
    const { name, age, email } = friend;
    return (
        <div>
            <h2>{name}</h2>
            <h3>{age}</h3>
            <h3>{email}</h3>
        </div>
    )
}
export default Friends;