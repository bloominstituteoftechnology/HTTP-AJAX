import React from 'react';
import axios from 'axios';

class Friend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friendData: [],
            friend: ''
        }
    }
render() {
    return (
        <div>Friend</div>
    )
}
}

export default Friend;