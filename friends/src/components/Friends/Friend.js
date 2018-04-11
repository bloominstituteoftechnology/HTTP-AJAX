import React from 'react';
import './Friends.css'
class Friend extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='Friend'>
                <li key={this.props.friend.id}>
                    <div>{this.props.friend.name}</div>
                    <div>{this.props.friend.age}</div>
                    <div>{this.props.friend.email}</div>
                </li>
            </div>
        );
    }
}

export default Friend;