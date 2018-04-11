import React from 'react';

class Friend extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
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