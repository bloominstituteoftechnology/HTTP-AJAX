import React from 'react'
import axios from 'axios'

class SingleFriend extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            friends: this.props.friend,
            name: '',
            age: '',
            email: ''

        }
    }

    render(){
    return(
        <div>
        <form method="post">
        <ul>
            <li>
            <h4>Name:</h4>
                <input />
            </li>
            <li>
            <h4>Age:</h4>
                <input />
            </li>
            <li>
            <h4>Email:</h4>
                <input />
            </li>
            <li>
            
                <button>
                    Add Friend
                </button>
            </li>
        </ul>
            
            
            
        </form>
          {this.props.friends.map((friend, index) => <div key={index}> 
          
          <h1>{friend.name}</h1>
          <h2>{friend.age}</h2>
          <h3>{friend.email}</h3>
          
          </div>)}
        </div>
    )}
}

export default SingleFriend