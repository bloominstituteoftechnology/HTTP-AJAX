import React, { Component } from 'react'
import axios from 'axios';
import Friend from './friend';
import AddFriend from './Components/addFriendForm';




 class Friends extends Component {
     constructor(props){
         super(props);
         this.state={
            friendsData: [],
                name: '',
                age: null,
                email: ''
         }
     }
componentDidMount = () => {
  axios
    .get('http://localhost:5000/friends')
    .then(response => {
        this.setState({friendsData: response.data})
        console.log(this.state.friendsData)
    })
}
inputChangeHandler=(e)=>{
    console.log(e.target.value)
    this.setState({ [e.target.name]: e.target.value });
}
  render() {
    return (
      <div>
      {this.state.friendsData.map(item=>(
          <Friend key={item.id} item={item} />
      ))}
       </div>
    )
  }
}


export default Friends;


