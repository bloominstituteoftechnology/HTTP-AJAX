import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
class FriendsForm extends React.Component {
    constructor(){
        super() 
        this.state={
            name:'',
            age:'',
            email:'',
            address:''
        }
    }
    handleInputChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    submitNewFriend=()=>{
        let newFriend=({
            name: this.state.name,
            age: this.state.age,
            email: this.state.email,
            address: this.state.address
        })
        axios.post('http://localhost:5000/friends', newFriend).then(()=>window.location.reload());
    }
    render() {
        return(
        <form>
            <input type='text' name='name' value={this.state.name} onChange={(e)=>this.handleInputChange(e)}/>
            <input type='number' name='age' value={this.state.age} onChange={(e)=>this.handleInputChange(e)}/>
            <input type='email' name='email' value={this.state.email} onChange={(e)=>this.handleInputChange(e)}/>
            <input type='text' name='address' value={this.state.address} onChange={(e)=>this.handleInputChange(e)}/>
            <Link to='/list'><button type='button' className='btn waves-effect waves-light' onClick={this.submitNewFriend}>Submit New Friend Info</button></Link>
            <Link to='/list' className='block'><button type='button' className='btn waves-effect waves-light'>Go To Friends List</button></Link>
        </form>
        )
    }

}
export default FriendsForm;