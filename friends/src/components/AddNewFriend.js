import React, {Component} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Form = styled.div`

    display: flex;
    max-width: 525px;
    width: 100%;
    height: 300px;
    border: 1px solid gray;
    border-radius: 40px;
    flex-direction: column;
    margin: 20px auto;
    background-color: rgba(255, 255,255, 0.8);
    align-items: center;
    justify-content: center;    
`
const Name = styled.div`


`
const Age = styled.div`
    

`

const Email = styled.div`


`

class AddNewFriend extends Component{
    constructor() {
        super();
        this.state = {
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

      handleSubmit = event => {
        event.preventDefault();
        const newFriend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        }
        axios.post(`http://localhost:5000/friends`, newFriend) 
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }

    render() {
    return(
        <Form>
        <h1>Add new friend</h1>
            <Name>
                <label>
                    Friend's name:
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </label>
                
            </Name>
            <Age>
            <label>
                    Friend's age:
                    <input
                        type="number"
                        name="age"
                        value={this.state.age}
                        onChange={this.handleChange}
                    />
                </label>
            </Age>
            <Email>
            <label>
                    Friend's email:
                    <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                </label>
            </Email>

            <button type="submit" onClick={this.handleSubmit}>Save</button>
        </Form>
        
    );
}
}

export default AddNewFriend;