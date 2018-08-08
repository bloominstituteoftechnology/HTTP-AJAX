import React from 'react';
import axios from 'axios';

class FriendsForm extends React.Component {
    constructor(){
        super() 
        this.state={
            name:'',
            age:'',
            email:''
        }
    }
    handleInputChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    submitNewFriend=()=>{
        let newFriend=({
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        })
        axios.post('http://localhost:5000/friends', newFriend).then(()=>window.location.reload());
    }
    render() {
        return(
        <form>
            <input type='text' name='name' value={this.state.name} onChange={(e)=>this.handleInputChange(e)}/>
            <input type='number' name='age' value={this.state.age} onChange={(e)=>this.handleInputChange(e)}/>
            <input type='email' name='email' value={this.state.email} onChange={(e)=>this.handleInputChange(e)}/>
            <button type='button' className='btn waves-effect waves-light' onClick={this.submitNewFriend}>Submit New Friend Info</button>
        </form>
        )
    }

}
export default FriendsForm;