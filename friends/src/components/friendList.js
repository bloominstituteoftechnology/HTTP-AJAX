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
                <h4> <strong>Name:</strong> {this.props.friends.name}</h4>
                <p> <strong>Age:</strong> {this.props.friends.age}</p>
                <p> <strong>Email:</strong> {this.props.friends.email}</p>
            </div>
           
        );
    }
}
 
export default FriendList;