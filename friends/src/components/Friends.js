import React from 'react';

class Friends extends React.Component {
    constructor() {
        super();
        this.state = {
            friends: []
        }

    }
    render() {
        return (
            <h1>Friends</h1>
        );
    }
}

export default Friends;