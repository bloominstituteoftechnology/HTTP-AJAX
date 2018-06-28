import React from 'react';
import axios from 'axios';

class Update extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            age: ''
        };
    }

    render() {
        return (
            <div className="friends-form">
              <h2>Update Friend</h2>
            </div>
        )
    }
}

export default Update;
