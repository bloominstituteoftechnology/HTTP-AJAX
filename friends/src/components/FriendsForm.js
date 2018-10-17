import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class FriendsForm extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
    }
    }

    render() {
        return (
            <div>

    <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" placeholder="Friend's Name" />
        </FormGroup>

        <FormGroup>
          <Label for="age">Age</Label>
          <Input type="text" name="age" id="age" placeholder="Friend's Age" />
        </FormGroup>

        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="text" name="email" id="email" placeholder="Friend's Email" />
    </FormGroup>

    <Button>Submit</Button>

    </Form>

            </div>
        )
    }
}

export default FriendsForm;