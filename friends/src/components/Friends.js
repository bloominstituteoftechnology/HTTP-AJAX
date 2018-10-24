import React from 'react';



class Friends extends React.Component {
    render() {
        return(
            <div>
            <p>Name: {this.props.friends.name}</p>
            <p>Age: {this.props.friends.age} </p>
            <p>Email:{this.props.friends.email} </p>
            </div>
            )

    }
}

export default Friends;