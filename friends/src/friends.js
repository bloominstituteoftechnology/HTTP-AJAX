import React from "react";
import axios from "axios";

const blankFriend = {
    name: "",
    email: "",
    age: "",
}
class Friends extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            friends: [],
            newFriend: {
                name: "",
                email: "",
                age: "",
            }
        }
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/friends")
            .then(res => this.setState({friends: res.data}))
            .catch(err => console.log(err))
    }

    changeHandler = e => {
        this.setState({ 
            newFriend: {
                ...this.state.newFriend,
                [e.target.name]: e.target.value,
        }
        });
    }

    addFriend = e => {
        e.preventDefault();
        axios
            .post("http://localhost:5000/friends", this.state.newFriend)
            .then(res => this.setState(
                {friends: res.data,
                newFriend: blankFriend,
                }))
    }

    deleteFriend = (e, id) => {
        e.preventDefault();
        axios
            .delete(`http://localhost:5000/friends/${id}`)
            .then(res => this.setState({
                friends: res.data,
            }))
    }

    render() {
        return (
        <div>
            <h1>A List of Friends</h1>
            {this.state.friends.map(friend => {
            return <div key={friend.id}>
                <p>Name: {friend.name}</p>
                <p>Email: {friend.email}</p>
                <p>Age: {friend.age}</p>
                <button onClick={e => this.deleteFriend(e, friend.id)}>Delete Friend</button>
                </div>
        })}
            <form onSubmit={this.addFriend}>
                <input type="text" onChange={this.changeHandler} name="name" value={this.state.newFriend.name} placeholder="name" ></input>
                <input type="email" onChange={this.changeHandler} name="email" value={this.state.newFriend.email} placeholder="email"></input>
                <input type="number" onChange={this.changeHandler} name="age" value={this.state.newFriend.age} placeholder="age"></input>
            </form>
            <button onClick={this.addFriend}>Add Friend</button>
        </div>
        )
    }
}

export default Friends;