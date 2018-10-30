import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";

//returns friend data
class FriendsList extends React.Component {
   constructor(props){
      super(props)
      this.state = {
         friend: null,
      }
   }

   componentDidMount(){
      if(this.props.url !== "/"){
         const id = this.props.match.params.id
         this.getFriend(id)
      }
   }

   getFriend = (id) => {
      axios
         .get(`http://localhost:5000/friends/${id}`)
         .then(response => {
            console.log(response)
            this.setState({
               friend: response.data
            })
         })
         .catch(err => console.log(err))
   }

   render(){
      if(this.props.url !== "/"){
         if(!this.state.friend) {
            return(
               <>
                  <div>Loading Friends....</div>
                  <p>Ideally this should work; however, I am still getting a 404 error message at /friends/id</p>
               </>
            )
         }
         return(
            <>
               <Link to="/">Home</Link>
               {this.state.friend}
            </>
         )
      }
      return (
         <>
            <Link to={`/friends/${this.props.friend.id}`} >
               {this.props.friend.name} {this.props.friend.age} {this.props.friend.email}
            </Link>
            <button onClick={() => this.props.delete(this.props.friend.id)}>Delete Friend</button>
         </>
      )
   }
}

export default FriendsList