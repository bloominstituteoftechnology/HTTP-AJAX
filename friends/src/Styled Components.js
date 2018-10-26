import styled from 'styled-components';


//FORM 


export const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
`;

export const InputStyle = styled.input`
    align-self: center;
    height: 5vh;
    border: 1px solid gray;
    border-radius: 5px;
    font-size: 16px;
    padding-left: 2%;
    margin-bottom: 15px;
`;

export const Submit = styled.button`
    font-size: 16px;
    font-weight: bold;
    background-color: lightblue;
    width: 20%;
    height: 5vh;
    border: 1px solid darkgray;
    border-radius: 5px;
    align-self: center;

    &:hover{
        background-color: lightgreen;
    }
`;

//FRIEND

export const FriendStyle = styled.div`
    background-color: lightblue;
    border: 1px solid darkgray;
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 40px auto;
    padding: 0 0 15px 0;
`;

export const FriendHeader = styled.h1`
    font-size: 30px;
    margin-bottom: 13px;
    margin-top: -15px;
`;

export const Text = styled.div`
    font-size: 20px;
    margin-bottom: 10px;
`;

export const X = styled.p`
    text-align: right;
    margin-right: 10px;
    font-size: 20px;
    font-weight: bold;
    margin-top: 5px;
    color: rbg(45,45,45);
    margin-bottom: 0;
    width: 5%;
    align-self: flex-end;

    &:hover{
        color: gray;
        cursor: pointer;
    }
`;

export const Email = styled.a`
    color: black;

    &:hover{
        color: gray;
        cursor: pointer;
    }
`;

export const UpdateButton = styled.button`
font-size: 16px;
font-weight: bold;
background-color: white;
width: 25%;
height: 5vh;
border: 1px solid darkgray;
border-radius: 5px;
align-self: center;
margin-top: 10px;

&:hover{
    background-color: lightgreen;
}
`;

//UPDATE FORM 

export const Background = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(30,30,30);
    background-color: rgba(30,30,30,0.4);
`;

export const UpdateFormStyle = styled.form`
    display: flex;
    flex-direction: column;
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 50%;
`;

export const UpdateSubmit = styled.button`
    font-size: 16px;
    font-weight: bold;
    background-color: lightblue;
    width: 40%;
    height: 5vh;
    border: 1px solid darkgray;
    border-radius: 5px;
    align-self: center;

    &:hover{
        background-color: lightgreen;
    }
`;

export const UpdateHeader = styled.h1`
    margin-top: -15px;
`;

export const UpdateX = styled.p`
    text-align: right;
    margin-right: -5px;
    font-size: 20px;
    font-weight: bold;
    margin-top: -10px;
    color: rbg(45,45,45);
    margin-bottom: 0;
    width: 5%;
    align-self: flex-end;

    &:hover{
        color: gray;
        cursor: pointer;
    }
`;