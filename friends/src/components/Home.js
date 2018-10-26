import React, { Component } from 'react';
import axios from 'axios';
import styled from '../../node_modules/styled-components';
//import styled from '../../../node_modules/styled-components';
import { Button, FormGroup, Form, Input, Tooltip, Row, Col, Container } from 'reactstrap';

import { FriendsList } from './FriendsList';

const FormContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-top: 60px;
`

const Header = styled.h1`
    text-align: center;
    color: darkcyan;
    margin-bottom: 30px;
`

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        friendsList: [...this.props.friendsList],
        tooltipOpen: false,
        name: "",
        age: "",
        email: ""
        }
    }

    toggleToolTip = () => {
        this.setState({
        tooltipOpen: !this.state.tooltipOpen
        });
}

    addingNewFriend = e => {
        e.preventDefault();
        if(this.state.name && this.state.age && this.state.email) {
            const friend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum libero obcaecati ipsam perferendis rem corporis accusantium mollitia saepe porro! Impedit deleniti praesentium necessitatibus nostrum, commodi excepturi, placeat molestiae enim ea ratione in repellat atque! Accusamus expedita obcaecati provident beatae quasi voluptates repellendus harum dolores itaque ducimus, incidunt quisquam. Numquam, quam.'
            }
            this.props.addNewFriend(friend);
            this.setState({name:"", age:"", email:""})            
        }        
    }

        
    
    changeHandler = e => this.setState({[e.target.name]: e.target.value});

    render() {
        return  <div className="App">
                    <Header>Welcome to your Friend's List</Header>
                    <Container>
                        <Row>      
                            <Col xs="3">
                                <FormContainer>
                                    <Form>
                                        <FormGroup>
                                            <Input placeholder="Insert Friend's Name" 
                                            onChange={this.changeHandler} 
                                            name="name" 
                                            value={this.state.name}>
                                            </Input>
                                        </FormGroup>
                                        <FormGroup>
                                            <Input placeholder="How old is he/she?" 
                                            onChange={this.changeHandler} 
                                            name="age" 
                                            value={this.state.age}>
                                            </Input>
                                        </FormGroup>
                                        <FormGroup>
                                            <Input placeholder="Friend's Email" 
                                            type="email" 
                                            onChange={this.changeHandler}
                                            name="email"  
                                            value={this.state.email}>
                                            </Input>
                                        </FormGroup>  
                                        <Button id="newfriend" color="primary" onClick={this.addingNewFriend} >New Friend</Button>
                                        <Tooltip placement="bottom" isOpen={this.state.tooltipOpen} target="newfriend" toggle={this.toggleToolTip}>
                                            Save New Friend!
                                        </Tooltip>
                                    </Form> 
                                </FormContainer>
                                
                            </Col>
                            <Col xs="8">
                                <FriendsList friends={this.props.friendsList} 
                                updateFriendInfo={this.props.updateFriendInfo} 
                                deleteFriend={this.props.deleteFriend} 
                                history={this.props.history} />
                            </Col>
                        </Row>  
                    </Container>  
                </div>  
    }
}