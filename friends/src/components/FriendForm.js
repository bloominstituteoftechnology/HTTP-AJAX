import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
    align-items: center;
    margin: 0 auto;
    padding-top: 20px;
    max-width: 400px;
    width: 100%;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

class FriendForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            age: '',
            email: '',
        }
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault();

        const newFriend = {
            name: this.state.name,
            age: Number(this.state.age),
            email: this.state.email,
        }

        this.props.add(newFriend);
        this.setState({
            name: '',
            age: '',
            email: '',
        })
    }

    render() {
        return (
            <Container>
                <form onSubmit={this.submitHandler}>
                    <fieldset>
                        <label for="nameField">Name</label>
                        <input type="text" placeholder="John Spraul" id="nameField" name="name" value={this.state.name} onChange={this.changeHandler} />
                        <label for="emailField">Email</label>
                        <input type="text" placeholder="🧖🏼‍♂️@gmail.com" id="emailField"  name="email" value={this.state.email} onChange={this.changeHandler} />
                        <label for="ageField">Age</label>
                        <input type="text" placeholder="100" id="ageField"  name="age" value={this.state.age} onChange={this.changeHandler} />
                        <ButtonContainer>
                            <input class="button-primary" type="submit" value="Add Friend" />
                            <input class="button-primary" type="submit" value="Update Friend" />
                        </ButtonContainer>
                    </fieldset>
                </form>
            </Container>
        )
    }
}

export default FriendForm;