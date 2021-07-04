import React, { Component } from 'react';
import{Link} from 'react-router-dom'
class DisplayList extends Component {

    render(){

        return(<React.Fragment>
            {this.props.friends.map((friend,index)=>(
   
               <Link to={`/friend/${friend.id}`} key={friend+index} class="dataContainer-style">
                    <div class="name-style">{friend.name}</div>
                    <div class="age-style">Age:{friend.age}</div>
                    <div class="email-style">{friend.email}</div>
               </Link>
            ))}
            </React.Fragment>  )
      
    }
}
    export default DisplayList;