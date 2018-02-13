import React from 'react';
import axios from 'axios';

/*const Form = () => {
    

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
*/

class FriendForm extends React.Component {
    state =  {
            name: '',
            age: '',
            email: ''
    }

    render() {
        return(
            <form onSubmit={this.submitHandler}>
                <label>Name</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />

                <label>Age</label>
                <input type="number" name="age" value={this.state.age} onChange={this.handleInputChange} />

                <label>Email</label>
                <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} />

                <button type="submit">Save Friend</button>
            </form>
        );
    }

    submitHandler = (event) => {
        event.preventDefault();

        axios.post('http://localhost:5000/friends', this.state)
        .then((response) => {
            console.log('response form post', response);
            this.setState({
                    name: '',
                    age: '',
                    email: '',
            });
            this.props.onCreate();
        })
        .catch((error) => {
            console.error('error saving the data');
        })
    }

    handleInputChange = (event) => {
        // const { name, value } = event.target;
         const name = event.target.name;
         let value = event.target.value;
        if (event.target.type === 'number') {
            value = Number(value);
        }

        this.setState({ [name]: value })
    }
}



export default FriendForm;
