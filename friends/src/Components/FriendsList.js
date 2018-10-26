import React from "react";

//returns friend data
class FriendsList extends React.Component {
   constructor(props){
      super(props)
      this.state = {
         selected: false
      }
   }

   render(){
      return (
         <>
            {this.props.friend.name} {this.props.friend.age} {this.props.friend.email}
            <button onClick={() => this.props.delete(this.props.friend.id)}>Delete Friend</button>
         </>
      )
   }
}

export default FriendsList