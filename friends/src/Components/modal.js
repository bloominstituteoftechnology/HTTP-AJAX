import React, { Component } from 'react'
import { Button, 
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter ,
    Form,
    FormGroup,
    Input,
    } from 'reactstrap';


const ModalComponent = props =>{
    return(
        <div>
        <Button color="danger" onClick={props.toggle}>{props.mainBtnName}</Button>
        <Modal isOpen={props.modal} toggle={props.toggle} className={props.className}>
          <ModalHeader toggle={props.toggle}>{props.modalTitle}</ModalHeader>
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
            <Button color="primary" onClick={props.click}>{props.innerBtnName}</Button>{' '}
            {/* <Button color="secondary" onClick={props.toggle}>Cancel</Button> */}
          </ModalFooter>
        </Modal>
      </div>
    )
}
export default ModalComponent;