import styled from 'styled-components';

export const StyledFriendsList = styled.div`
  // color: red;
  // border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;

  :first-of-type {
    align-content: flex-end;
    text-align: center;
    color: white;
    background-color: #333;
  }

  :nth-of-type(2n + 3) {
    // color: blue;
    background-color: #ededed;
  }

  p {
    // border: 1px solid red;
    width: 30%;
    text-align: center;
  }

  span {
    display: flex;
    visibility: hidden;
    cursor: pointer;
    height: 50px;
    width: 40px;
    margin: 0;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    position: fixed;
    right: calc(10% + 1px);
  }

  :hover {
    span {
      display: flex;
      visibility: visible;
      background-color: red;
      color: white;
    }
  }
`;

export const ListWrapper = styled.div`
  border: 1px solid #333;
  // border-top: none;
  width: 80%;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const StyledForm = styled.form`
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
  // border: 1px solid blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #ededed;
  box-sizing: border-box;

  h3 {
    font-size: 1.6rem;
    margin: 0px;
    padding-bottom: 10px;
  }

  input {
    width: 40%;
    margin: 5px 0;
    height: 20px;
    outline-color: #333;
    outline-width: thin;
  }

  button {
    margin-top: 5px;
    width: 20%;
    height: 40px;
    background-color: #333;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    outline-color: #333;
    // outline-width: thin;
    border: none;

    :hover {
      background-color: #666;
    }
  }
`;
