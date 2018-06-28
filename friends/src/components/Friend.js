import React from 'react';

class Friend extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {

        }
    };

    render() {
        return (
            <div className="friend-card">
                <h1>Name: {this.props.friend.name}</h1>
                <p>Age: {this.props.friend.age}</p>
                <p>Email: {this.props.friend.email}</p>
            </div>
        )
    }
}
 
export default Friend;