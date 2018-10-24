import React from 'react';
import { Route } from 'react-router-dom';

class FriendsList extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <span>{this.props.name}</span>
                <span>{this.props.age}</span>
                <span>{this.props.email}</span>

            </div>
        )
    }
};

export default FriendsList;

