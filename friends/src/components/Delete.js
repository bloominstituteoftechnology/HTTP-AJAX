import React from 'react';
import axios from 'axios';

class Delete extends React.Component {
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
              <h2>Delete Friend</h2>

            </div>
        )
    }
}

export default Delete;
