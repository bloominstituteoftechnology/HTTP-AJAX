import React from 'react'; //
import styled from 'styled-components';

const AddButton = styled.div`
    display: flex;
    justify-content: center;
    width: 100px;
    height: 40px;
    border: 1px solid black;
    border-radius: 5px;
    margin-left: 46%;
    font: 16px;
`

function AddFriendButton (props) {
    return (
        <AddButton handleSubmitBtn = {props.handleSubmitBtn} handleFriendFormInput = {props.handleFriendFormInput}>
            Submit
        </AddButton>
    )
}

export default AddFriendButton;

