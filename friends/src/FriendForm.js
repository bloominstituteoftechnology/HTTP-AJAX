import React from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import styled from 'styled-components'

const FlexWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px;
`

const FriendForm = props => {
    
        return (
          <FlexWrapper>
            <Form inline onSubmit={props.submitFriend}>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="exampleName" className="mr-sm-2">Name</Label>
                    <Input type="text" name="name" id="exampleName" placeholder="Billy Bob"
                        value={props.value}
                        onChange={props.inputFriend} />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="exampleAge" className="mr-sm-2">Age</Label>
                    <Input type="number" name="age" id="exampleAge" placeholder="42" />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="idk@something.cool" />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
          </FlexWrapper>
        )
    }

export default FriendForm;