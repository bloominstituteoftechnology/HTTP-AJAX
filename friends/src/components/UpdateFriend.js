import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
    align-items: center;
    margin: 0 auto;
    padding-top: 20px;
    max-width: 400px;
    width: 100%;
`;

class UpdateFriend extends React.Component {
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

    submitUpdateHandler = (event) => {
        event.preventDefault();

        let id = 0;

        // Check if the name/email being entered is valid
        for (let i = 0; i < this.props.friends.length; i++) {
            if ((this.state.name === this.props.friends[i].name) 
                || (this.state.email === this.props.friends[i].email)) {
                    id = this.props.friends[i].id
                }
        }

        if (id === 0) {
            alert("❗ Person does not exist 💀 ❗")
        } else {
            this.props.update(id, this.state.name, this.state.age, this.state.email)
        }

        this.setState({
            name: '',
            age: '',
            email: '',
        })

        event.target.reset();
    }

    render() {
        return (
            <Container>
                <form onSubmit={this.submitUpdateHandler}>
                    <fieldset>
                        <label htmlFor="nameField">Name</label>
                        <input type="text" placeholder="John Spraul" id="nameField" name="name" value={this.state.name} onChange={this.changeHandler} />
                        <label htmlFor="emailField">Email</label>
                        <input type="text" placeholder="🧖🏼‍♂️@gmail.com" id="emailField"  name="email" value={this.state.email} onChange={this.changeHandler} />
                        <label htmlFor="ageField">Age</label>
                        <input type="text" placeholder="100" id="ageField"  name="age" value={this.state.age} onChange={this.changeHandler} />
                        <input className="button button-outline" type="submit" value="Update Friend" />
                    </fieldset>
                </form>
            </Container>
            
        )
    }
}

export default UpdateFriend;