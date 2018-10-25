import React from 'react';
import styled from 'styled-components';

class Form extends React.Component {
    constructor(props){
        super()
        this.state ={

        }
    }

    render() {
        return(
            <FormContainer>
                <form>
                    <input  placeholder="Name"  name="name" value={this.props.name} onChange={this.props.inputHandler} />
                    <input  placeholder="Age" name="age" value={this.props.age} onChange={this.props.inputHandler} />
                    <input  placeholder="Email Address"  name="email" value={this.props.email} onChange={this.props.inputHandler} />
                    <button type="submit" onClick={this.props.addNewFriend}> Submit </button>
                </form>

            </FormContainer>  
        )
    }

};

export default Form;

const FormContainer = styled.div`
    width: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
`