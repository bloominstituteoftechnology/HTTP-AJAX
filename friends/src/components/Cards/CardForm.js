import React, { Component } from 'react';
import { Container, Row, Col, Input, Button, Fa } from 'mdbreact';
import Styled from 'styled-components';

const Wrapper = Styled.div`
    width: 100%;
    margin: 20% 0 0 24.5%;
`;

class CardForm extends Component {
    constructor() {
      super();
      this.state = {
          name: '',
          email: '',
          age: '',
      }
    }

    handleName = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    }

    handleAge = (e) => {
        this.setState({
            age: e.target.value
        });
    }

    handleSubmit = () => {
        console.log(this.state)
        this.setState({
            name: '',
            email: '',
            age: '',
        })
    }
  
    render() {
      return (
        <Wrapper>
            <Container>
                <Row>
                <Col md="6">
                    <form>
                    <p className="h5 text-center mb-4">Add A Friend</p>
                    <div className="grey-text">
                        <Input value={this.state.name} onChange={this.handleName} label="Name" icon="user" group type="text" validate error="wrong" success="right"/>
                        <Input value={this.state.email} onChange={this.handleEmail} label="Email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                        <Input value={this.state.age} onChange={this.handleAge} label="Age" icon="tag" group type="text" validate error="wrong" success="right"/>
                    </div>
                    <div className="text-center">
                        <Button onClick={this.handleSubmit} outline color="secondary">Save<Fa icon="paper-plane-o" className="ml-1"/></Button>
                    </div>
                    </form>
                </Col>
                </Row>
            </Container>
        </Wrapper>
      );
    }
  }

  export default CardForm;