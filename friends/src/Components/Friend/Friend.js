import React from 'react';
import axios from 'axios';

class Friend extends React.Component{
    constructor(props) {
        super (props);
        this.state={
            cardNumber: '',
            name: '',
            age: '',
            email:'',
            address:''
        }
    }
    componentDidMount() {
        const id=this.props.match.params.id;
        axios.get(`http://localhost:5000/friends/`)
        .then(res=>{for (let i=0; i<res.data.length; i++) {
            if (res.data[i].id===Number(id)) {
            return  this.setState({
                    cardNumber:res.data[i].id,
                    name:res.data[i].name,
                    age:res.data[i].age,
                    email:res.data[i].email,
                    address:res.data[i].address
                },)
            }
        }this.props.history.push('/friends');
        })
        .catch(err=>console.log(err));
    }
    delete=()=>{
        axios.delete(`http://localhost:5000/friends/${this.state.cardNumber}`).then(res=>this.props.history.push('/friends')).catch(err=>console.log(err));
    }
    goToList=()=>{
        this.props.history.push('/friends');
    }
    handleInputChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    updateFriendInfo=()=>{
        const updatedFriendInfo={
            name:this.state.name,
            age:this.state.age,
            email:this.state.email,
            address:this.state.address
        }
        axios.put(`http://localhost:5000/friends/${this.state.cardNumber}`,updatedFriendInfo).then(res=>this.props.history.push('/friends')).catch(err=>console.log(err));
    }
    render() {
        return(
            <div>
            <div className='card'>
                <p>Friend number {this.state.cardNumber} information:</p>
                <p>{this.state.name}</p>
                <p>{this.state.age}</p>
                <p>{this.state.email}</p>
                <p>{this.state.address}</p>
                <i className="fas fa-trash-alt" onClick={()=>this.delete(this.state.cardNumber)}></i>
            </div>
            <form>
            <input type='text' placeholder='enter a name' name='name' value={this.state.name} onChange={this.handleInputChange}/>
            <input type='number' placeholder='enter an age' name='age' value={this.state.age} onChange={this.handleInputChange}/>
            <input type='email' placeholder='enter an email' name='email' value={this.state.email} onChange={this.handleInputChange}/>
            <input type='text' placeholder='enter an address' name='address' value={this.state.address} onChange={this.handleInputChange}/>
            <button type='button' className='btn waves-effect waves-light' onClick={this.updateFriendInfo}>Update Friend Info</button>
            <button onClick={()=>this.goToList()} type='button' className='btn waves-effect waves-light'>Go To Friends List</button>
            </form>
            </div>
        )
    }
}
export default Friend;