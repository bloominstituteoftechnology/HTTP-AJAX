import React from 'react';
import { format } from 'url';


class FriendList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newFriend: {
                name: '',
                age: '',
                email: '',
              }
          }
    }
    render() { 
        return ( 
           <div className='Card'>
            <h2>Name: {this.props.friends.name}</h2>
            <p>Age: {this.props.friends.age}</p>
            <p>Email: {this.props.friends.email}</p>
           </div> 
        );
    }
}
       
    changeHandler = event => {
        this.setState({
            newFriend: {
                ...this.state.newFriend,
                [event.target.name]: event.target.value 
    }
    
});
    }

addFriend = event => {
    event.preventDefault();
    axios.post('http://localhost:5000/friends', this.state.newFriend)
    .then(response => this.setState({ friend: response.data }))

}


    <div className='newFriendContainer'>
     <form>
       <input type='text' onChange={this.changeHandler} name='name' value={this.state.newFriend.name} /> 
       <input type='text' onChange={this.changeHandler}  name='age' value={this.state.newFriend.age} />
       <input type='text' onChange={this.changeHandler}  name='email' value={this.state.newFriend.email} />
     </form>
        
        <button onClick={this.addFriend}>Add Friend</button> 

    </div>
    
    
    
    


    export default FriendList;















        

 