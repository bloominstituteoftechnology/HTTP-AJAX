import React, { Component } from 'react';
import axios from 'axios';

class Friend  extends Component { 
    constructor(){
        super()
        this.state={
            name:'',
            age:'',
            email:'',
        }
    
    }
// showUpdatedFriend =() =>{
//      this.setState({showUpdatedFriend: !this.state.showUpdatedFriend})
//     }
updateFriend = (friendId,reset) =>{
    const friend ={};
    if(this.state.name !== ''){
        friend.name = this.state.name;
    }
    if(this.state.age !== ''){
        friend.age = this.state.age;
    }
    if(this.state.email !== ''){
        friend.email = this.state.email;
    }
    axios
    .put(`http://localhost:5000/friends/${friendId}`,friend)
    .then(response=>{
        this.setState({ name: '', age: '', email: '',})
        this.props.updateGet();
        return reset;
    
    })
    .catch(err =>{
console.log(err);
    })

}
setInput = (element)=>{
    this.setState({[element.target.name]: element.target.value})
   }
render(){
   console.log(this.props)

    const {friends} = this.props;
    const friend = friends.find(friend => friend.id === parseInt(this.props.match.params.id))
   
      return(
      <React.Fragment>
            
       <div  className="dataContainer-style">
                <div className="name-style">{friend.name}</div>
                <div className="age-style">Age:{friend.age}</div>
                <div className="email-style">{friend.email}</div>
                <div class="container-style">
       </div>
       </div>
       <div class="friendForm-style">
         <input class="input-style" 
            type="text" 
            onChange={this.setInput}
            placeholder="Enter name"
            name="name"
            value={this.state.name}
        />
        <input class="inputTwo-style" 
            type="number" 
            onChange={this.setInput}
            name="age"
            placeholder="Enter number"
            value={this.state.age}
        />
        <input class="inputThree-style"
            type="text"
            onChange={this.setInput}
            name="email"
            placeholder="Enter email"
            value={this.state.email}
            />
            <div className="buttonContainer-style">
        <button className="buttonFriends-style" onClick={() => this.props.deleteFriend(friend.id,window.history.back())}>Delete</button>
        <button className="buttonFriends-style" onClick={() => this.updateFriend(friend.id, window.history.back())}>Update</button>
        </div>
        </div>
   
        </React.Fragment>)
    }
   
}
    export default Friend;