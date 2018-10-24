import React from 'react';

 export default class Friend extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.friend.name}</h1>
                <div>{`Age: ${this.props.friend.age}`}</div>
                <div>{`Email: ${this.props.friend.email}`}</div>
            </div>
        )
    }
}