import React, { Component } from 'react';


class Friend extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const styles = {
            display: "flex",
            justifyContent: "space-around"
        }
        const ageColStyle = {
            paddingLeft: "70px"
        }
        return (
            <div style={styles}>
          
                <div>{this.props.friend.name}</div>
                <div style={ageColStyle}>{this.props.friend.age}</div>
                <div>{this.props.friend.email}</div>
            
           </div>
        );
    }
}


export default Friend;