import React, {Component} from 'react';
import axios from 'axios';


class SavedFriends extends Component{
constructor(props){
    super(props)
    console.log(props.saved);
    this.state = {}
}
savedFriends = () => {
    const obj = { name:this.props.saved.newFriend, email: this.props.saved.newEmail, age: this.props.saved.newAge }
    axios.post('http://localhost:5000/friends', obj)
         .then(s => {
          console.log(s);
    
        this.props.getFriends();
          this.props.clearInput();
          })
          .catch(err => {
          console.log(err)
          })  
 }
render(){
return(
    <div>
        <button onClick={this.savedFriends}> Add To List </button>  
    </div>
)
}
}
export default SavedFriends;