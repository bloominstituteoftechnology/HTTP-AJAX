import React from 'react';
import { format } from 'url';


class FriendList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
          }
    }
    render() { 
        return ( 
           <div className='card'>
            <h2>Name: {this.props.friends.name}</h2>
            <p>Age: {this.props.friends.age}</p>
            <p>Email: {this.props.friends.email}</p>
            <button onClick={this.updateFriend}>Update Friend</button> 
            <button onClick={this.deleteFriend}>Delete Friend</button> 
           </div> 
        );
    }
}
       
   


   
    
    
    
    


    export default FriendList;















        

 