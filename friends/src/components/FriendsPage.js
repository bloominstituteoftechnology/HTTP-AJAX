import React from "react";
import { Link, NavLink, Route } from "react-router-dom";
import axios from "axios";

import './FriendsPage.css';
import Friend from './Friend';

class FriendsPage extends React.Component {
    constructor() {
        super();

        this.state = {
            friends: [],
            loading: true
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/friends')
            .then(response => {
                this.setState({
                    friends: response.data,
                    loading: false
                })
            })
            .catch(error => {
                console.error('Server Error', error);
              });
    }

    render() {
        return (
            <div>
                {this.state.friends.map(friend => (
                    <Friend key={friend.id} friend={friend} />
                ))}
            </div>
        )
    }

}




export default FriendsPage;