import React from 'react';


class FriendList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
           <div>
            <h2>Name: {this.props.friends.name}</h2>
            <p>Age: {this.props.friends.age}</p>
            <p>Email: {this.props.friends.email}</p>
           </div> 
        );
    }
}
           
             
        

 
export default FriendList;