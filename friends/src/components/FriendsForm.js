import React from 'react';

class FriendsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="friends-form">
                <h3>Add a new friend:</h3>
                <input
                    type="text"
                    placeholder="Name"
                />
                <input
                    type="text"
                    placeholder="Age"
                />
                <input
                    type="text"
                    placeholder="Email"
                />
            </div>
        )
    }
}
 
export default FriendsForm;