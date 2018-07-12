import React, { Component } from 'react';

class Friend extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className='friend'>
                <div>{this.props.friend.name}</div>
                <div>{this.props.friend.age}</div>
                <div>{this.props.friend.email}</div>
            </div>
        );
    }
}
 
export default Friend;