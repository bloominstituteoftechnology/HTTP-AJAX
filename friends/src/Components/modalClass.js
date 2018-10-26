import React from 'react';
import { Button, 
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter ,
    Form,
    FormGroup,
    Input,
    } from 'reactstrap'

class ModalComponent extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            modal: false
        }
    }
    toggle=()=>{
        this.setState({
            modal: !this.state.modal
        })
    }
    submitHandler=(e)=>{
        e.preventDefault();
        this.setState({modal: !this.state.modal}) 
    }
    
    render(){
        return(
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.mainBtnName}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} >
          <ModalHeader toggle={this.toggle}>{this.props.modalTitle}</ModalHeader>
          <ModalBody>
          <Form onSubmit={this.submitHandler}>
              <FormGroup>
                <Input type="text" name='name' value={this.props.name} placeholder="Friend's Name" onChange={this.props.inputChange}/>
              </FormGroup>
              <FormGroup>
                <Input type="age" name='age' value={this.props.age} placeholder="How old are they" onChange={this.props.inputChange}/>
              </FormGroup>
              <FormGroup>
                <Input type="text" name='email' value={this.props.email} placeholder="What is their e-mail" onChange={this.props.inputChange} />
              </FormGroup>
            <Button color="primary" type='submit' outline onClick={this.props.click}>{this.props.innerBtnName}</Button>{' '}
          </Form>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </Modal>
      </div>
        )
    }
}

export default ModalComponent;