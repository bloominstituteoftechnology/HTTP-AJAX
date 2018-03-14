import React, {Component} from 'react';
import axios from 'axios';

class FriendsList extends Component {
    state = { 
        friends: [],
        userName: '',
        userAge: '',
        userEmail: '' 
    }

    componentDidMount() {
        axios.get('http://localhost:5000/friends')
            .then(response => {this.setState({ friends: response.data})})
            .catch(error => {
                console.error('There was an error', error);
            })
    };

    handleName = (event) => {
        this.setState({ userName: event.target.value})
    };

    handleAge = (event) => {
        this.setState({ userAge: event.target.value})
    };

    handleEmail = (event) => {
        this.setState({ userEmail: event.target.value})
    };

    addNewItem = (event) => {
        axios.post('http://localhost:5000/friends', 
        {
            name: this.state.userName, 
            age: this.state.userAge, 
            email: this.state.userEmail
        })
        .catch(err => {
            console.error('There was an error', err);
        })
        this.setState({
            userName: '',
            userAge: '',
            userEmail: ''
        })
    };

    render() {
     return(
        <div>
        <div className='Friend_Title'>Friends Contact</div>
        <div className='Friend_List'>
        {this.state.friends.map(friend => {
        
        return(
             <div className='mt-2 mb-2' key={friend.id}>
             <div>{friend.name}</div>
            <div>{`Age: ${friend.age}`}</div>
             <div>{`Email: ${friend.email}`}</div>
            </div>
                    
        );
    })}
         </div>
        <form onSubmit={this.addNewItem}>
        <input
          type='text'
            onChange={this.handleName}
            placeholder='Add Name'
            value={this.state.userName}
         />
         
         <input className='ml-2' type='text'
             onChange={this.handleAge}
             placeholder='Add Friend'
             value={this.state.userAge}
         />
        
        <input className='ml-2'type='text'
            onChange={this.handleEmail}
            placeholder='Add Email'
            value={this.state.userEmail}
            />
            <button>Add Friend</button>
            
             </form>
    </div>
        
    );
 }
}
    
   export default FriendsList;