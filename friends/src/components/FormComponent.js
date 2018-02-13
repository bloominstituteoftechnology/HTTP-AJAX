import React from 'react';
import axios from 'axios';

const Form = () => {
    

    const postRequest = () => {
        let newName = '';
        let newAge= '';
        let newEmail = '';
        axios.post('http://localhost:5000/friends', {
            name: newName,
            age: newAge,
            email: newEmail,
        })
        .then((newFriend) => {
            newFriend = newFriend.data;
            this.setState({friends: this.push(newFriend)});
        })
            .catch((error) => {
            console.log('there was an error', error);
        })
    };
    
    return (
        <div>
            <form onSubmit={postRequest()}>
                <input name="Name" type="text" value={this.newName}/>
                <input name="Age" type="number" value={this.newAge}/>
                <input name="Email" type="text" value={this.newEmail}/>
                <button type='submit'>Save Friend</button>
            </form>
        </div>
    );
}

export default Form;
