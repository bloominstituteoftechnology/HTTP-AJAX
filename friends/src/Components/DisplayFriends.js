import React from "react";
import axios from "axios"

export default class DisplayFriends extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      friends: [],
    }
  }

   componentDidMount(){
      axios
      .get("http://localhost:5000/friends")
      .then(response => {
         console.log(response)
         this.setState({friends: response.data})
      })
      .catch(err => {
         console.log(err)
      })
   }

   render(){
      return(
         <div className="display">
            <h1>Here are my friends</h1>
            {this.state.friends.map(friend => {
               return <div key={friend.id}>{friend.name}</div>
            })}
         </div>
      )
   }

}