import React from 'react'
import styled from 'styled-components';
import { Button } from 'reactstrap';
import ModalComponent from './modalClass';

const FriendDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid black;
    h1{
        font-size: 18px;
        color: red;
    }

`
const ButtonContainer = styled.div `
display:flex;

`

 const Friend=(props)=>{
return(
    <FriendDiv>
        <h1>{props.item.name} &nbsp;
            <span>Age: {props.item.age}</span> 
        </h1>
        
        <h4>{props.item.email}</h4>
        <ButtonContainer>
        <Button outline color="primary" size="sm" onClick={()=>{props.deleteFriend(props.item.id)}}>Delete EM!</Button>{' '}
        <ModalComponent
          inputChange={props.inputChange}
          name={props.name}
          age={props.age}
          email={props.email}
          click={()=>{props.click(props.item.id)}}
          mainBtnName='Edit Friend'
          modalTitle='Change dem deets'
          innerBtnName='Change that ish'
        />
        </ButtonContainer>
        </FriendDiv>
)
}
export default Friend;