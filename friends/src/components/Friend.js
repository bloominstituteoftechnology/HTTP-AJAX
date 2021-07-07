import React, { Component } from 'react';
import axios from 'axios';


class Friend extends Component {
    constructor(props) {
        super(props);
    }
    handleDelete = (id) => {
        axios.delete(`http://localhost:5000/friends/${id}`)
            // .then((res) => {document.location = '/'}) // another way of updating friends list after delete, but this way refreshes whole page
            .then((res) => {this.props.updateFriends()})
            .catch((err) => {console.log(err)})


    }

    render() {
        // console.log(this.props)
        const rowStyles = {
            display: "flex",
            justifyContent: "space-around",
            margin: "10px 0px 0px 0px",
            fontSize: "18px", 
            fontWeight: "bold",
            borderTop: "3px solid darkgray",
            height: "40px",
            paddingTop: "5px",
        }
        const ageColStyle = {
            paddingLeft: "70px",
        }
 
        return (
            <div style={rowStyles}>
                <div >{this.props.friend.name}</div>
                <div style={ageColStyle}>{this.props.friend.age}</div>
                <div >{this.props.friend.email}</div>
                <button onClick={() => {this.handleDelete(this.props.friend.id)}}>X</button>
           </div>
        );
    }
}


export default Friend;