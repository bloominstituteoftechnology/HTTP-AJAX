import React, { Component } from 'react';
import axios from 'axios';
import Friend from './Friend'
import { Table } from 'reactstrap';



class Friends extends Component {
    constructor() {
        super();
        this.state = {
            friends: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:5000/friends")
            .then((response => this.setState({friends: response.data})))
            .catch((err) => console.log(err))
    }
    render() {
        const headerStyle = {
            color: "blue",
            display: "flex",
            justifyContent: "space-around",
            paddingRight: "80px",
            margin: "30px 0px",
            fontWeight: "bold"
        }

        return (
            <div>
                        <div style={headerStyle}>
                            <div>Name</div>
                            <div>Age</div>
                            <div>Email</div>
                        </div>
                {this.state.friends.map((friend, index) => { return <Friend key={friend.name + index} friend={friend}/>})}
            </div>
        )
    }
}



export default Friends;