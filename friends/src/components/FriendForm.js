import React, { Component } from 'react';
import Button from '@atlaskit/button';
import FieldText from '@atlaskit/field-text';
import Form, {
    Field,
    FieldGroup,
    FormHeader,
    FormFooter,
  } from '@atlaskit/form';

import styled from 'styled-components';

const Container = styled.div`
    align-items: center;
    margin: 0 auto;
    max-width: 250px;
    width: 100%;
`;

class FriendForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fullname: "",
        }
    }

    submitHandler = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    login = () => {
        const person = this.state.fullname;
        localStorage.setItem('fullname', person) // https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem
        window.location.reload();
    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.login}>
                    <FormHeader
                        title="Friend List"
                        description="Please enter your information."
                    />
                    <FieldGroup label="Details">
                        <Field label="Full Name" helperText="Your data won't be stored anywhere." onChange={this.submitHandler}>
                            <FieldText name="fullname" placeholder=" 🤡" />
                        </Field>
                    </FieldGroup>
                    <FormFooter
                        actionsContent={[
                            {
                                id: 'submit-button',
                            },
                            {},
                        ]}
                    >
                        <Button type="submit" appearance="primary">Login</Button>
                    </FormFooter>
                </Form>
            </Container>
        )
    }
}

export default FriendForm;