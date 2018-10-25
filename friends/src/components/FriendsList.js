import React from 'react';
import styled from 'styled-components';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Form, FormGroup, Tooltip, Table } from 'reactstrap';


const Icon = styled.i`
cursor: pointer;
color: darkcyan;
margin-right: 10px;
`
export class FriendsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            tooltipOpen: false,
            tooltipOpenTwo: false,
            name: "",
            age: "",
            email: "",
            id: null
        };
    }

        toggleToolTip = () => {
            this.setState({
            tooltipOpen: !this.state.tooltipOpen
            });
        }

        toggleToolTipTwo = () => {
            this.setState({
            tooltipOpenTwo: !this.state.tooltipOpenTwo
            });
        }

        toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
        }

        clickHandler = () => {
            const friend = {
                name:this.state.name,
                age:this.state.age,
                email:this.state.email
            }
            this.props.updateFriendInfo(this.state.id, friend);
            this.toggle();
            this.setState({name: "", age:"", email:"", id:null})
        }

        idHandler = id => this.setState({id: id})

        changeHandler = e => this.setState({[e.target.name]: e.target.value});

        render() {
        return  <>
                    <Table>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.friends.map(friend =>   <tr key={friend.id}>
                                                                    <th scope="row">{friend.id}</th>
                                                                        <td>{friend.name}</td>
                                                                        <td>{friend.age}</td>
                                                                        <td>{friend.email}</td>
                                                                        <td>
                                                                            <Icon onClick={() => {this.toggle(); this.idHandler(friend.id)}} className="fas fa-edit"></Icon>
                                                                            <Icon onClick={() => this.props.deleteFriend(friend.id)} className="fas fa-trash-alt"></Icon>
                                                                        </td>
                                                                </tr>
                                        
                            )}
                        </tbody>
                    </Table>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Update Friend Info</ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup>
                                    <Input placeholder="Edit your friend's name here" onChange={this.changeHandler} name="name" value={this.state.name}></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input placeholder="Edit your friend's age here" onChange={this.changeHandler} name="age" value={this.state.age}></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input placeholder="Edit your friend's email here" type="email" onChange={this.changeHandler} name="email"  value={this.state.email}></Input>
                                </FormGroup>
                            </Form>  
                        </ModalBody>
                        <ModalFooter>
                            <Button id="update" color="success" onClick={this.clickHandler}>Update Info</Button>
                            <Button id="cancel" color="secondary" onClick={this.toggle}>Cancel</Button>
                            <Tooltip placement="bottom" isOpen={this.state.tooltipOpen} target="update" toggle={this.toggleToolTip}>
                                Submit Update!
                            </Tooltip>
                            <Tooltip placement="bottom" isOpen={this.state.tooltipOpenTwo} target="cancel" toggle={this.toggleToolTipTwo}>
                                Go Back!
                            </Tooltip>
                        </ModalFooter>
                    </Modal>                    
                </>
        }
}