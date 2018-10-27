import React, {Component} from 'react';
import {FriendFormContainer} from './styledComponents'

class EditFriend extends Component{

    constructor(props){
        super(props);
        this.state = {
            text: null
        }
    }

    handleChange = (e) => {

    }

    render(){

        const currentFriend = this.props.friends.filter(friend =>{
            return (friend.id === this.props.editFriendId)
        })[0]



        return(
            <FriendFormContainer>
                <form onSubmit={this.handleClick}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" onChange={this.handleChange} defaultValue={currentFriend.name} />
                    <label htmlFor="age">Age:</label>
                    <input type="text" name="age" onChange={this.handleChange} defaultValue={currentFriend.age} />
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" onChange={this.handleChange} defaultValue={currentFriend.email} />
                    <button>Edit Friend</button>
                </form>
            </FriendFormContainer>
        )
    }

}

export default EditFriend