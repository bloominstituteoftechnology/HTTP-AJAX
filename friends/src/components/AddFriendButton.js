import React from 'react'; //
import styled from 'styled-components';

const AddButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    width: 60px;
    height: 0px;
    border: 1px solid black;
    border-radius: 5px;
    font-size: 10px;
    padding-bottom: 15px;
    margin-bottom: 15px;
    margin-left: 565px;
    cursor: pointer;
`

function AddFriendButton (props) {
    return (
        <AddButton onClick = {props.handleSubmitBtn} handleFriendFormInput = {props.handleFriendFormInput}>
            Submit
        </AddButton>
    )
}

export default AddFriendButton;

