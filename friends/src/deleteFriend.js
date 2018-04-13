import React,{Component} from 'react';
import axios from 'axios';




class DeleteFriend extends Component {
    constructor(props){
      super(props)
      this.state={

      }
    }
deleteFriend = (id) => {
    // console.log(this.props)
    // alert(id)
     axios.delete(`http://localhost:5000/friends/${id}`)
     .then(s =>{
         console.log(s);
         this.componentDidUpdate();
     })
     .catch(err =>{
        console.log(err)
     })
    
}
componentDidUpdate(){
    this.props.getFriends();  
}
render(){
return(
       <div>
         <button onClick={() => this.deleteFriend(this.props.id)}>Delete Friend</button>
       </div>

)
   }


}
export default DeleteFriend;