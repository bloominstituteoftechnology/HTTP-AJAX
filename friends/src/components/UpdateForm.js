import React, {Component} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const UpdateFields = styled.div`

`

class UpdateForm extends Component{
    constructor() {
        super();
        this.state = {
            friends: this.props,
            name: '',
            age: '',
            email: ''
        }
    }

    handleChange = event => {
        this.setState({ 
            [event.target.name]: event.target.value
        });
    }
    
    update = (id) => {
        const updatedFriend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        }
        axios.put(`http://localhost:5000/friends/${id}`, updatedFriend)
          .then(res => {
            console.log(res);
            console.log(res.data);
            this.setState({
                friends: res.data
            })
        })
    }

      render() {

        return (
            <UpdateFields>
                    <label>
                        Update your name:
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Update your age:
                        <input
                            type="number"
                            name="age" 
                            value={this.state.age}
                            onChange={this.handleChange}

                        />
                    </label>
                    <label>
                        Update your email:
                        <input
                            type="email"
                            name="email" 
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </label>
                    <button onClick={() => this.update()}>Update</button>
                </UpdateFields>
        );
    }
}
export default UpdateForm;