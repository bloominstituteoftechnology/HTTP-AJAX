import React from "react";
import axios from "axios";

class Friends extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            friends: [],
        }
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/friends")
            .then(res => this.setState({friends: res.data}))
            .catch(err => console.log(err))
    }

    render() {
        return (
        <div>
            <h1>A List of Friends</h1>
            {this.state.friends.map(friend => {
            return <div key={friend.id}><p>Name: {friend.name}</p><p>Email: {friend.email}</p><p>Age: {friend.age}</p></div>
        })}
        </div>
        )
    }
}

export default Friends;