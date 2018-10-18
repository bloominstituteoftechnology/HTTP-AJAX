import React from 'react';
import axios from 'axios';
// import { Route } from 'react-router-dom'; 
import { Link } from "react-router-dom"
import Friend from "./Friend"

class FriendsList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            friends: []
        }
    }
    componentDidMount() {
        axios
        .get('http://localhost:5000/friends')
        .then(response => this.setState({ friends: response.data}))
        .catch(error => console.log("ERRORRRRR", error))
    }


    

    render() {
        return (
            this.state.friends.map(friend => {
                return <Link onClick={event => this.props.idHandler(event, friend.id)} key={friend.id} to={`/friends/${friend.id}`}> <Friend friend={friend} deleteFriend={this.props.deleteFriend}/> </Link>
            })
        )
    }

}

// event => {this.props.eventHandler(event,friend.id)}

export default FriendsList;