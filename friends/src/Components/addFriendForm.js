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
import ModalComponent from './modal'


const AddFriend = props => {

    return (
      <div>
      <ModalComponent 
        friendsData={props.friendsData}
        inputChange={props.inputChangeHandler}
        toggle={props.toggle}
        modal={props.modal}
        name={props.name}
        age={props.age}
        email={props.email}
        click={props.click}
        mainBtnName='Add Friend'
        modalTitle='GeT tHe DeEtS!'
        innerBtnName='Add my Dude!'
        />
      </div>
    );
    }

export default AddFriend;
