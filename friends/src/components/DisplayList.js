import React, { Component } from 'react';

class DisplayList extends Component {

    render(){

        return(<React.Fragment>
            {this.props.friends.map((friend,index)=>(
               <div class="dataContainer-style">
                <div class="name-style">{friend.name}</div>
                <div class="age-style">Age:{friend.age}</div>
                <div class="email-style">{friend.email}</div>
</div>
            ))}
            </React.Fragment>  )
      
    }
}
    export default DisplayList;