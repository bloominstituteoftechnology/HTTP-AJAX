import React from 'react';

class Friend extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <p>Name: {this.props.friend.name}</p>
                <p>age: {this.props.friend.age}</p>
                <p>email: {this.props.friend.email}</p>
                <p>id: {this.props.friend.id}</p>
                <button onClick={this.props.deleteFriend(this.props.friend.id)}>^Delete^</button>
            </div>
        )
    }

}


export default Friend;