import React from 'react';
import axios from 'axios';

class FriendsList extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            friends:[],
            name: '',
            age: '',
            email:'',
            address:'',
            cardNumber:'',
            loading: true
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/friends').then(res=>this.setState({friends:res.data,loading: false})).catch(err=>console.log(err));
    }
    delete=(index)=>{
        axios.delete(`http://localhost:5000/friends/${index}`).then(window.location.reload()).catch(err=>console.log(err));
    }
    handleInputChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    updateFriendInfo=()=>{
        const id=this.state.cardNumber;
        let updatedInfo={
            name: this.state.name,
            age: this.state.age,
            email: this.state.email,
            address:this.state.address
        }
        axios.put(`http://localhost:5000/friends/${id}`,updatedInfo).then(window.location.reload()).catch(err=>console.log(err));
    }
    goToForm=()=>{
        this.props.history.push('/');
    }
    render() {
        if (this.state.friends.length===0 && this.state.loading===false) {
            return (
                <h1>Sorry no data here.</h1>
            )
        }
        return (
            <div>
                {this.state.friends.map((e,i)=>
                    <div key={i} className='card'>
                        <p>Friend number {e.id} information:</p>
                        <p>{e.name}</p>
                        <p>{e.age}</p>
                        <p>{e.email}</p>
                        <p>{e.address}</p>
                        <i className="fas fa-trash-alt" onClick={()=>this.delete(e.id)}></i>
                    </div>
                )}
                <form>
                    <h2>Update Form</h2>
                    <input type='number' placeholder='enter card number' name='cardNumber' value={this.state.cardNumber} onChange={(e)=>this.handleInputChange(e)}/>
                    <input type='text' placeholder='enter a name' name='name' value={this.state.name} onChange={(e)=>this.handleInputChange(e)}/>
                    <input type='number' placeholder='enter an age' name='age' value={this.state.age} onChange={(e)=>this.handleInputChange(e)}/>
                    <input type='email' placeholder='enter an email' name='email' value={this.state.email} onChange={(e)=>this.handleInputChange(e)}/>
                    <input type='text' placeholder='enter an address' name='address' value={this.state.address} onChange={(e)=>this.handleInputChange(e)}/>
                    <button type='button' className='btn waves-effect waves-light' onClick={this.updateFriendInfo}>Update Friend Info</button>
                    <button onClick={this.goToForm} className='btn waves-effect waves-light backToFriendForm'>Go To Friends Form</button>
                </form>
                
            </div>
        )
    }
}
export default FriendsList;