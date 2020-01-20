import React from 'react';
import axios from 'axios';


// const saveFriend = props => {
//         const newFriend = {
//             name: props.name,
//             age: props.age,
//             email: props.email,
//         }
//         axios
//             .post(`/friends`, newFriend)
//             .then(response => console.log(response))
//             .catch(err => console.log(err));
//     }
 

class AddFriend extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: 0,
            email: '',
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    render() {
        return(
        <div className="friend-form">
            <form onSubmit={ event => {
                event.preventDefault();
                this.props.saveFriend(this.state);
            }}>
                <input 
                    onChange={this.handleChange} 
                    name="name" 
                    value={this.state.name} 
                    type="text" 
                    placeholder="First Name"
                />
                <input
                    onChange={this.handleChange}
                    name="age"
                    value={this.state.age}  
                    type="number" 
                    placeholder="Age" 
                />
                <input 
                    onChange={this.handleChange}
                    name="email"
                    value={this.state.email}  
                    type="email" 
                    placeholder="Email" 
                />
                <button type="submit"> Submit</button>
            </form>
        </div>
    )}
}

export default AddFriend;