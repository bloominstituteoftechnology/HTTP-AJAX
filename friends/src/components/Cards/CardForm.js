import React, { Component } from 'react';
import { Container, Row, Col, Input, Button, Fa, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import Styled from 'styled-components';

const Wrapper = Styled.div`
    width: 100%;
    margin: 20% 0 0 24.5%;
`;

class CardForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
          modal14: false,
      }
    }

    // Toggles the modal for confirmation
    toggle(nr) {
        let modalNumber = 'modal' + nr
        this.setState({
          [modalNumber]: !this.state[modalNumber]
        });
      }

    // Handles submitting the information
    handleSubmit = (e) => {
        e.preventDefault();

        // If we are updating, set the value for each of the inputs to the friend's values
        if (this.props.isUpdating) {
            this.props.handleUpdateFriend(this.props.friend.id);
        } else {
            this.props.handleSubmit();
            this.toggle(14);
        }
    }

    render() {
      return (
        <Wrapper>
            <Container>
                <Row>
                <Col md="6">
                    <form>
                    <p className="h5 text-center mb-4">{this.props.isUpdating ? 'Update Friend' : 'Add New Friend'}</p>
                    <div className="grey-text">
                        <Input value={this.props.friend.name} onChange={this.props.handleInput} name="name" label="Name" icon="user" group type="text" validate error="wrong" success="right"/>
                        <Input value={this.props.friend.email} onChange={this.props.handleInput} name="email" label="Email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                        <Input value={this.props.friend.age} onChange={this.props.handleInput} name="age" label="Age" icon="tag" group type="text" validate error="wrong" success="right"/>
                    </div>
                    <div className="text-center">
                        <Button onClick={event => {this.handleSubmit(event)}} outline color="secondary">Save<Fa icon="paper-plane-o" className="ml-1"/></Button>
                    </div>
                    </form>
                </Col>
                </Row>
            </Container>
            <Modal isOpen={this.state.modal14} toggle={() => this.toggle(14)} centered>
                <ModalHeader toggle={() => this.toggle(14)}>Friend</ModalHeader>
                <ModalBody>
                    Friend Added
                </ModalBody>
                <ModalFooter>
                    <Button color="deep-orange lighten-1" onClick={() => this.toggle(14)}>Ok</Button>
                </ModalFooter>
            </Modal>
        </Wrapper>
      );
    }
  }

  export default CardForm;