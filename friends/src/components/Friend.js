import React from 'react';
import axios from 'axios';

class Friend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.friend.name,
            age: props.friend.age,
            email: props.friend.email,
            id: props.friend.id
        }
    }

    deleteFriend = (id) => {
        console.log(id);
        axios
          .delete(`http://localhost:5000/friends/${id}`)
          .then(response => {
            console.log('POST RESPONSE: ', response);
            this.props.handleSetData(response.data);
            this.setState({ name: '', email: '', age: '' })
          })
          .catch(error => console.log(error));
    };
    
    render() {
        return (
            <div className="friend-card">
                <h1>Name: {this.state.name}</h1>
                <p>Age: {this.state.age}</p>
                <p>Email: {this.state.email}</p>
                <button onClick={() => this.deleteFriend(`${this.state.id}`)}>Delete</button>
            </div>
            // <div className="friend-card">
            //     <h1>Name: {name}</h1>
            //     <p>Age: {age}</p>
            //     <p>Email: {email}</p>
            // </div>
        )    
    }
    
}
 
export default Friend;
 