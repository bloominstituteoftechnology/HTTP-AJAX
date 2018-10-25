import React from 'react';
import {Button} from 'reactstrap';



class Friends extends React.Component {
    render() {
        return(
            <div>
            <p>Name: {this.props.friends.name}</p>
            <p>Age: {this.props.friends.age} </p>
            <p>Email:{this.props.friends.email} </p>
            <Button color="danger" onClick={this.props.delete(this.props.friends.id)}> Delete</Button>
            </div>
            )

    }
}

export default Friends;