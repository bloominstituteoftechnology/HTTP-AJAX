import React from 'react';
import { Button, 
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter ,
    Form,
    FormGroup,
    Input,
    } from 'reactstrap';

class AddFriend extends React.Component {
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
        <Button color="danger" onClick={this.toggle}>Add a new Friend</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Lets Get the Deets</ModalHeader>
          <ModalBody>
          <Form>
              <FormGroup>
                <Input type="text"  placeholder="Friend's Name" />
              </FormGroup>
              <FormGroup>
                <Input type="age" name="age" placeholder="How old are they" sm={2}/>
              </FormGroup>
              <FormGroup>
                <Input type="text" name="email" placeholder="What is their e-mail" />
              </FormGroup>
          </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddFriend;
