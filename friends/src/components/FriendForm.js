import React from 'react'


class FriendForm extends React.Component{
    constructor(){
        super();
        this.state = {
            friend:{
            name:'',
            email:'',
            age:''}
        }
    }

    render(){
    return (
        <form >
        <input name='name' type='text' placeholder='name'></input>
        <input name='email' type='email' placeholder='email@website.com'></input>
        <input name='age' type='number' placeholder='age'></input>
        <button>Submit</button>
        </form>
    )
    }
}

export default FriendForm