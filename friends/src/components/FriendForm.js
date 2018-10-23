import React from 'react';
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

const FriendForm = props => {
        return (
            <Container>
                <Form onSubmit={this.login}>
                    <FormHeader
                        title="Friend List"
                        description="Please enter your information."
                    />
                    <FieldGroup label="Details">
                        <Field label="Full Name" helperText="Your data won't be stored anywhere." onChange={this.changeHandler}>
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

export default FriendForm;