import React from 'react'
import axios from 'axios'


class FriendProfile extends React.Component{
    constructor(){
        super()
        this.state = {
            name: '',
            age: '',
            email: ''
        }
    }


updateFriend= (props) => {
    const id = props.id
        axios
        .post(`http://localhost:5000/friends/${id}`,{
            friend: {
                name: this.state.name,
                age: this.state.age,
                email: this.state.email
            }
        } )
        .then((resolve) =>{
            this.setState({
                
            })
        console.log(resolve)
        })
        .catch(err => {
            console.log(err)
        })
    };


updateHandler = (event) => {
    this.setState({
        [event.target.name]: event.target.value 
    })
}

        render(){
    return(
        <div>
         <form type='submit' >
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
                <p onClick={this.updateFriend} style={{cursor: 'pointer'}}>
                    Update Friend
                </p>
        </form>
        </div>
    )
        }
}

    
export default FriendProfile  