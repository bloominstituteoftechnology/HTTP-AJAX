import React, { Component } from 'react';


class Friend extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const rowStyles = {
            // display: "flex",
            justifyContent: "space-around",
            margin: "10px 0px 0px 0px",
            fontSize: "18px", 
            fontWeight: "bold",
            borderTop: "3px solid darkgray",
            textAlign: "start",
            display: "flex",
            height: "40px",
            paddingTop: "5px"

        }
        const ageColStyle = {
            paddingLeft: "70px",
        }
        
        return (
            <div style={rowStyles}>
                <div >{this.props.friend.name}</div>
                <div style={ageColStyle}>{this.props.friend.age}</div>
                <div >{this.props.friend.email}</div>
           </div>
        );
    }
}


export default Friend;