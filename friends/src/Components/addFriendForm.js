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

class AddFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      newFriend:{
          name: '',
          age: null,
          email: ''
      }
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  inputChangeHandler=(e)=>{
    console.log(e.target.value)
    this.setState({ [e.target.name]: e.target.value });
}
  onSubmitHandler=(e)=>{
      e.prevent.default();
      const{ name, age, email} = this.state;
      const friend = {
          name,
          age,
          email
      }
      axios.post('http://localhost:5000/friends', ...this.state).then(friends=>{
          this.setState({

          })
      })
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
                <Input type="text" name='name' value={this.state.name} placeholder="Friend's Name" onChange={this.props.inputChange}/>
              </FormGroup>
              <FormGroup>
                <Input type="age" name='age' value={this.state.age} placeholder="How old are they" onChange={this.props.inputChange}/>
              </FormGroup>
              <FormGroup>
                <Input type="text" name='email' value={this.state.email} placeholder="What is their e-mail" onChange={this.props.inputChage} />
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
