import React from 'react';
import axios from 'axios';

class FriendInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: '',
            email: '',
        };
    } 
    onInputChange = (e, type) => {
        this.setState({
            [type]: e.target.value,
        });
    }
    onAddFriend = (e) => {
        e.preventDefault();
        if (!this.state.name || !this.state.age || !this.state.email) return alert('Please fill out all fields');
        const [name, age, email] = [this.state.name, Number(this.state.age), this.state.email];
        this.setState({name: '', age: '', email: ''});
        axios.post('http://localhost:5000/friends', {
            name,
            age,
            email,
        })
            .then(res => {
                this.props.updateList(res.data);
                this.props.history.push('/');
            })
            .catch(err => { throw new Error(err) });
    }
    render(){
        return (
            <div className="input-container">
                <form onSubmit={this.onAddFriend} className="friend-input">
                    <span className="fas fa-undo-alt return-home" onClick={() => this.props.history.push('/')}></span>
                    <p>Enter new friend's information:</p>
                    <input type="text" placeholder="Name" value={this.state.name} onChange={(e) => this.onInputChange(e, 'name')} />
                    <input type="number" placeholder="Age" value={this.state.age} onChange={(e) => this.onInputChange(e, 'age')} />
                    <input type="email" placeholder="Email" value={this.state.email} onChange={(e) => this.onInputChange(e, 'email')} />
                    <button type="submit">Add Friend</button>
                </form>
            </div>
        );
    } 
}

export default FriendInput;