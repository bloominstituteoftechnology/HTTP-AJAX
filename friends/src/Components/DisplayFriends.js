import React, { Component } from 'react';
import UpdateFriendForm from './UpdateFriendForm';
import { timingSafeEqual } from 'crypto';

    class DisplayFriends extends Component {
        constructor(props){
            super(props);
            this.state = {
            updatingId : null,
            updateFriend:{
                name : '',
                age : 0,
                email:'',
              },
             }
        }


        onInputChange = e => {
            e.preventDefault();
        
             this.setState({ 
                updateFriend: {
                  ...this.state.updateFriend,
                 [e.target.name]: e.target.value,
                }
              });
          }

     // once update is clicked, assign that friend to state value
          assignUpdatingFriend = (friend) =>{
              this.setState({
                  updateFriend : friend,
                  updatingId : friend.id,
            });
          }

          // when update is done, update submit is executed
          submitUpdate = () => {
              console.log("submitUpdate in DisplayFriend");
              this.props.updateFriend(this.state.updateFriend);
              this.setState({
                updatingId : null,
                updateFriend:{
                    name : '',
                    age : 0,
                    email:'',
                  },
              })
          }



        render(){
        
        console.log(this.state.updateFriend);
        return(

          <div className="displayFriends">
       
          {(this.props.friends)
          ?  this.props.friends.map( friend => {
            if(this.state.updatingId !== friend.id){
                return (
                    <div className="friendCard" key={friend.id}>
                    <h2 key={friend.id} className='name'> {friend.name}</h2>
                    <p>age : {friend.age}</p>
                    <p>email : {friend.email}</p>
                    <button onClick= {()=>this.assignUpdatingFriend(friend)}>Update</button>
                    <button onClick= {(e) => this.props.deleteFriend(e, friend.id)}>Delete Me</button>
                    </div>   
                ) 
            }
            else{
                return(
                    <UpdateFriendForm submitUpdate={this.submitUpdate} 
                    updateFriend={this.state.updateFriend} onInputChange={this.onInputChange} />
                )
            }


        })
        : 'Loading...' }
        
        </div>
        )
            
    }
}
    export default DisplayFriends;