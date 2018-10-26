import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

export default class UpdateFriend extends React.Component {
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
          {`Update ${this.props.userInfo.name}`}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>{`Update ${
            this.props.userInfo.name
          }'s Info`}</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.props.submitUpdate}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  onChange={this.props.inputChange}
                  value={this.props.userInfo.name}
                />
              </FormGroup>
              <FormGroup>
                <Label for="age">Age</Label>
                <Input
                  type="number"
                  name="age"
                  onChange={this.props.numberInputChange}
                  value={this.props.userInfo.age}
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  onChange={this.props.inputChange}
                  value={this.props.userInfo.email}
                />
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input
                  type="textarea"
                  name="description"
                  onChange={this.props.inputChange}
                  value={this.props.userInfo.description}
                />
              </FormGroup>
              <Button type="submit">Submit</Button>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Exit
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
