import React, { Component } from 'react';

class Friends extends Component {
    constructor(props)  {
        super(props);
        this.state  =   {
            friends: this.props.friends,
        }
    }
    componentWillReceiveProps(newProps) {
        this.setState((state)   =>  ({
            friends: newProps.friends,
        }))
    }
    render()    {
        return(
            <div>
            {this.state.friends.map((friend, index) =>  {
                return(
                    <div key={index}>{friend.name} {friend.age} {friend.email}</div>
                )
            })}
            </div>
        )
    }
}

export default Friends;
