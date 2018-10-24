import React from 'react';


class FriendList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            friends: [],
         }
    }
    render() { 
        return (  
            <div>
                <h4> Name: {this.props.friends.name}</h4>
                <p> Age: {this.props.friends.age}</p>
                <p> Email: {this.props.friends.email}</p>

            </div>
        );
    }
}
 
export default FriendList;