import React, { Component } from 'react'
import axios from 'axios'
import Friends from './FriendsContainer'


 class FriendContainer extends Component {

     constructor(){
         super();
         this.state ={
            friends:[]
         }
        //  console.log('hi',this.state.friends)

     }
     componentDidMount(){
        axios.get('http://localhost:5000/friends')
        .then((res) =>{
            // console.log(res)
            this.setState({
                friends: res.data
            })
        })
        .catch((err) =>{
            console.log('U Just Lost One', err)
        })
     }



  render() {
    return (
      <div className = "friendContainer">
        <Friends friends ={this.state.friends}/>
      </div>
    )
  }
}

export default FriendContainer