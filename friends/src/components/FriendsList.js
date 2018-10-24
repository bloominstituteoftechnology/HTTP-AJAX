import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Form, FormGroup } from 'reactstrap';

const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Friend = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60%;    
`

const IconsContainer = styled.div`
display: flex;
width: 30%;
justify-content: space-around;
align-items: center;
`
const Icon = styled.i`
cursor: pointer;
`
export class FriendsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friendsList: [],
            modal: false,
            name: "",
            age: "",
            email: "",
            id: null
        };
        this.toggle = this.toggle.bind(this);
    }        

        componentDidMount() {
            this.setState({
                friendsList: this.props.friends
            })
        }

        toggle() {
        this.setState({
            modal: !this.state.modal
        });
        }
        
        updateFriendInfo = id => axios.put(`http://localhost:5000/friends/${id}`, {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
            })
            .then(response => this.setState({friendsList: [...response.data],name:"",age:"",email:"",id: null}))
            .catch(err => console.error(err))

        idHandler = id => this.setState({id: id})

        changeHandler = e => this.setState({[e.target.name]: e.target.value});

        render() {
        return  <Container>
                    {this.props.friends.map(friend => <Friend 
                        key={friend.id}>
                        <h4>{friend.name}</h4>
                        <IconsContainer>
                            <Icon onClick={() => {this.toggle(); this.idHandler(friend.id)}} className="fas fa-edit"></Icon>
                            <Icon onClick={() => this.props.deleteFriend(friend.id)} className="fas fa-trash-alt"></Icon>
                        </IconsContainer>                                                                
                    </Friend>)}
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Update Friend Info</ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup>
                                    <Input placeholder="Name" onChange={this.changeHandler} name="name" value={this.state.name}></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input placeholder="Age" onChange={this.changeHandler} name="age" value={this.state.age}></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input placeholder="Email" type="email" onChange={this.changeHandler} name="email"  value={this.state.email}></Input>
                                </FormGroup>
                            </Form>  
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={() => {this.updateFriendInfo(this.state.id);this.toggle()}}>Update Info</Button>
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </Container>
        }
}