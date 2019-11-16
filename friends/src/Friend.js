import React from 'react';

class Friend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        
    };

    render() {
        return (
            <div className="friend-card">
                <p>Name: {this.props.friend.name}</p>
                <p>Age: {this.props.friend.age}</p>
                <p>Email: {this.props.friend.email}</p>
            </div>
        )
    }
}
 
export default Friend;