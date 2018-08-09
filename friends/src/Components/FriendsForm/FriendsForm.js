import React from 'react';
import axios from 'axios';

class FriendsForm extends React.Component {
    constructor(props){
        super(props) 
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
        axios.post('http://localhost:5000/friends', newFriend).then(()=>{window.location.reload(); this.props.history.push('/list')});
    }
    goToList=()=>{
        this.props.history.push('/list');
    }
    render() {
        return(
        <form>
            <input type='text' placeholder='enter a name' name='name' value={this.state.name} onChange={(e)=>this.handleInputChange(e)}/>
            <input type='number' placeholder='enter an age' name='age' value={this.state.age} onChange={(e)=>this.handleInputChange(e)}/>
            <input type='email' placeholder='enter an email' name='email' value={this.state.email} onChange={(e)=>this.handleInputChange(e)}/>
            <input type='text' placeholder='enter an address' name='address' value={this.state.address} onChange={(e)=>this.handleInputChange(e)}/>
            <button type='button' className='btn waves-effect waves-light' onClick={this.submitNewFriend}>Submit New Friend Info</button>
            <button onClick={()=>this.goToList()} type='button' className='btn waves-effect waves-light'>Go To Friends List</button>
        </form>
        )
    }

}
export default FriendsForm;