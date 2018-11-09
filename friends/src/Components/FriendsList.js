import React from 'react';

class FriendsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
render() {
    return (
            <div>
                <span>ID: {this.props.id}</span>
              <span> Name: {this.props.name}</span>
               <span> Age: {this.props.age}</span>
               <span> Email: {this.props.email}</span>
               <button onClick={ this.props.delete(this.props.id)}>Delete </button>
             </div>
        )
    };
 };
 export default FriendsList;
