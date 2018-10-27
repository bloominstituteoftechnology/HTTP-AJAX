import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

class FriendProfile extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            name: '',
            age: '',
            email: ''
        }
    }

   updateFriend = (e) => {
       e.preventDefault();
       const id = this.props.id;
       this.props.updateHandler(id, this.state.name, this.state.age, this.state.email);
       this.setState({name: '', age:'', email:''});
   }

   inputHandler = (e) => {
       e.preventDefault();
    this.setState({[e.target.name]: e.target.value})
  }
 

    render() {
        return(
            <Container>
                <FriendContainer>
                        <FriendDiv>
                            <span>{this.props.name}</span>
                        </FriendDiv>
                        <FriendDiv>
                            <span>{this.props.age}</span>
                        </FriendDiv>
                        <FriendDiv>
                            <span>{this.props.email}</span>
                        </FriendDiv>
                    </FriendContainer>

                    

                    <FormContainer>
                        <form>
                            <input  placeholder="Name"  name="name" value={this.state.name} onChange={this.inputHandler} />
                            <input  placeholder="Age" name="age" value={this.state.age} onChange={this.inputHandler} />
                            <input  placeholder="Email Address"  name="email" value={this.state.email} onChange={this.inputHandler} />
                            <button type="submit" onClick={this.updateFriend}> Update </button>
                        </form>

                    </FormContainer>
                </Container>
        )
    }
};

export default FriendProfile;


//

const FriendContainer = styled.div`
    width: 800px;
    display: flex;
    border: 1px solid grey;
    margin: auto;
    height: 40px;
`;

const FriendDiv = styled.div`
    width: 33.3%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FormContainer = styled.div`
    width: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
`

const Container = styled.div`
    width: 800px;
    display: flex;
    flex-direction: column;
    margin: 20px auto;
`