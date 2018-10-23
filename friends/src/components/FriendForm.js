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
    max-width: 400px;
    width: 100%;
`;

const FriendForm = props => {
        return (
            <Container>
                <Form>
                    <FormHeader
                        title="New Friend Submission"
                        description="Please enter your information."
                    />
                    <FieldGroup label="Details">
                        <Field label="Full Name">
                            <FieldText name="name" placeholder="🤡" />
                        </Field>
                        <Field label="Email Address">
                            <FieldText name="email" placeholder="📧" />
                        </Field>
                        <Field label="Age" helperText="Your data won't be stored anywhere.">
                            <FieldText name="age" placeholder="👴🏼" />
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
                        <Button type="submit" appearance="primary">Submit</Button>
                    </FormFooter>
                </Form>
            </Container>
        )
}

export default FriendForm;