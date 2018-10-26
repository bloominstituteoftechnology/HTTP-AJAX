import React from 'react';

import './friends.css'

class Friend extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className='friend'>
                <div className='friendID'>{this.props.friend.id}</div>
                <div>{this.props.friend.age}</div>
                <div>{this.props.friend.name}</div>
                <div>{this.props.friend.email}</div>
            </div>
        )
    }
}
export default Friend;
