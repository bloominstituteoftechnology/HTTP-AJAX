import React from "react";

export default class FriendForm extends React.Component {
   constructor(props){
      super(props)
      this.state = {
         newFriends: {
            id: this.props.friends.length + 1,
            name: "",
            age: 0,
            email: "", 
         },
      }
    }
   render(){
      console.log(this.props.text)
      return(
         <div className="form">
            <h2>Join the DarkSide</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <span>Name:</span>
              <input type="text" 
                placeholder="Enter your name..." 
                onChange={this.props.input}/> 
              <br/>
              <span>Age:</span>
              <input type="number" 
                placeholder="Age" 
                min="18" max="80" 
                onChange={this.props.input}/>
              <br/>
              <span>Email:</span>
              <input type="email" 
                placeholder="Email" 
                onChange={this.props.input}/>
            </form>
         </div>
      )
   }
}