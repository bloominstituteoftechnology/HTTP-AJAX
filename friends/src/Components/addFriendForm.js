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
import axios from 'axios';

const AddFriend = props => {

    return (
      <div>
        <Button color="danger" onClick={props.toggle}>Add a new Friend</Button>
        <Modal isOpen={props.modal} toggle={props.toggle} className={props.className}>
          <ModalHeader toggle={props.toggle}>Lets Get the Deets</ModalHeader>
          <ModalBody>
          <Form>
              <FormGroup>
                <Input type="text" name='name' value={props.friendsData.name} placeholder="Friend's Name" onChange={props.inputChange}/>
              </FormGroup>
              <FormGroup>
                <Input type="age" name='age' value={props.friendsData.age} placeholder="How old are they" onChange={props.inputChange}/>
              </FormGroup>
              <FormGroup>
                <Input type="text" name='email' value={props.email} placeholder="What is their e-mail" onChange={props.inputChange} />
              </FormGroup>
          </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={props.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={props.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }

export default AddFriend;
