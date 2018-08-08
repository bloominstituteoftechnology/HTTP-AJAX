import React, {Component} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Form = styled.div`

    display: flex;
    width: 525px;
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

    handleNameChange = event => {
        this.setState({ 
            name: event.target.value
        });
      }
      handleAgeChange = event => {
        this.setState({ 
            age: event.target.value
        });
      }
      handleEmailChange = event => {
        this.setState({ 
            email: event.target.value
        });
      }

      handleSubmit = event => {
        event.preventDefault();        
        
    
        axios.post(`http://localhost:5000/friends`, {
           
                name: this.state.name,
                age: this.state.age,
                email: this.state.email
            
        })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }

    render() {
    return(
        <Form>
            <Name>
                <label>
                    Friend's name:
                    <input
                        type="text"
                        name="name"
                        onChange={this.handleNameChange}
                    />
                </label>
                
            </Name>
            <Age>
            <label>
                    Friend's age:
                    <input
                        type="text"
                        name="age"
                        onChange={this.handleAgeChange}
                    />
                </label>
            </Age>
            <Email>
            <label>
                    Friend's email:
                    <input
                        type="text"
                        name="email"
                        onChange={this.handleEmailChange}
                    />
                </label>
            </Email>

            <button type="submit" onClick={this.handleSubmit}>Save</button>
        </Form>
        
    );
}
}

export default AddNewFriend;