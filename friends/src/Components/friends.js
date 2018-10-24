import React, { Component } from 'react'
import axios from 'axios';
import Friend from './friend';




 class Friends extends Component {
     constructor(props){
         super(props);
         this.state={
            friends: [],
            newFriend:{
                name: '',
                age: null,
                email: ''
            }
         }
     }
componentDidMount = () => {
  axios
    .get('http://localhost:5000/friends')
    .then(response => {
        this.setState({friends: response.data})
        console.log(this.state.friends)
    })
}

  render() {
    return (
      <div>
      {this.state.friends.map(item=>(
          <Friend key={item.id} item={item} />
      ))}
       </div>
    )
  }
}


export default Friends;


