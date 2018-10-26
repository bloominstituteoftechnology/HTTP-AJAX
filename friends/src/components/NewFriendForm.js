import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

export default class NewFriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          Add New Friend
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Add a Friend</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.props.addNewFriend}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  onChange={this.props.inputChange}
                  value={this.props.newFriend.name}
                />
              </FormGroup>
              <FormGroup>
                <Label for="age">Age</Label>
                <Input
                  type="number"
                  name="age"
                  onChange={this.props.numberInputChange}
                  value={this.props.newFriend.age}
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  onChange={this.props.inputChange}
                  value={this.props.newFriend.email}
                />
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input
                  type="textarea"
                  name="description"
                  onChange={this.props.inputChange}
                  value={this.props.newFriend.description}
                />
              </FormGroup>
              <Button type="submit">Submit</Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
