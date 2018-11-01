import React from 'react'
import axios from 'axios'


class FriendProfile extends React.Component{
    constructor(){
        super()
        this.state = {
            name: '',
            age: '',
            location: ''
        }
    }


removeFriend= props => {
        axios
        .put(`http://localhost:5000/friends/${props.friend.id}`)
        .then((resolve) =>{
        console.log(resolve)
        })
        .catch(err => {
            console.log(err)
        })
    };

updateFriend = (props, event) => {
    event.preventDefault();
    const id = props.friend.id
    this.updateHandler(id);
}

updateHandler = (event) => {
    this.setState({
        [event.target.name]: event.target.value 
    })
}

        render(){
    return(
        <div>
         <form onSubmit={this.updateFriend} >
            <h4>UpdateName:</h4>
                <input 
                type='text'
                onChange={this.updateHandler} 
                name='name' 
                value={this.state.name} />
            <h4>UpdateAge:</h4>
                <input 
                onChange={this.updateHandler}
                type='text' 
                name='age' 
                value={this.state.age} />
            <h4>UpdateEmail:</h4>
                <input onChange={this.updateHandler} 
                type='text' 
                name='email' 
                value={this.state.email} />
                <button type='submit'>
                    Update Friend
                </button>
        </form>
        </div>
    )
        }
}

    
export default FriendProfile  