import React from "react"

export default class UpdateFriend extends React.Component {
   constructor(props){
      super(props)
      this.state = {
         friends: this.props.friends,
         friend: {
            name: "",
            age: 18,
            email: "",
         }
      }
   }

//handle input handles all form boxes and updates the edited friends information
   handleUpdateInput = (event) => {
      this.setState({
         friend: {
            ...this.state.friend,
            [event.target.name]: event.target.value
         }
      })
   }

/*searches through the current friends to find a the matching friends id based on the name or email
if no match is found the user is alerted, otherwise the friend is updated
in either case the input is cleared using this.setState
*/
   submitChange = () => {
      let id = 0
      for(let i = 0; i < this.props.friends.length; i++){
         if((this.state.friend.name === this.props.friends[i].name) 
         || (this.state.friend.email === this.props.friends[i].email)) {
               id = this.props.friends[i].id
         }
      }
      if(id === 0){
         alert("No Matches Found")
      }else {
         this.props.update(id, this.state.friend.name, this.state.friend.age, this.state.friend.email)
      }
      this.setState({
         ...this.state.friends,
         friend: {
            name: "",
            age: 18,
            email: "",
         }
      })
   }

   render() {
      return(
         <div className="update">
            <h2>Edit A User</h2>
            <form onSubmit={(e) => e.preventDefault()}>
               <label>Name:</label>
               <input type="text"
                  name="name"
                  value={this.state.friend.name} 
                  placeholder="Enter your name..." 
                  onChange={this.handleUpdateInput}
               />
               <br/>
               <label>Age:</label>
               <input type="number" 
                  name="age"
                  value={this.state.friend.age}
                  placeholder="Age" 
                  min="18" max="80" 
                  onChange={this.handleUpdateInput}/>
               <br/>
               <label>Email:</label>
               <input type="email" 
                  value={this.state.friend.email}
                  name="email"
                  placeholder="Email" 
                  onChange={this.handleUpdateInput}/>
               <input type="submit" onClick={() => this.submitChange()}/>
            </form>
         </div>
      )
   }

}