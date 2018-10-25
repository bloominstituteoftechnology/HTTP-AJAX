import React from 'react'; //
import styled from 'styled-components';

const FriendInputForm = styled.div`
display: flex;
flex-direction:column;
align-items: center;
justify-content:space-around;
width: 100%;
`

function FriendInfoForm (props) {
    return (
        <FriendInputForm>
            <input type="text" placeholder="Enter Friend's Name" name= "name" onKeyPress= {props.handleFriendFormInput}/>
            <br/>
            <input type="text" placeholder="Enter Friend's Age" name= "age" onKeyPress= {props.handleFriendFormInput}/>
            <br/>
            <input type="text" placeholder="Enter Friend's Email" name= "email" onKeyPress= {props.handleFriendFormInput}/>
            <br/>
        </FriendInputForm>
        )
    }

export default FriendInfoForm;