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

  form {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;

    input {
      width: 30%;
      text-align: center;
      height: 30px;
      margin: 10px 0;
      font-size: 1.6rem;
      outline-color: #000;
      background-color: #333;
      color: white;
      border: none;
    }

    button {
      height: 30px;
      width: 15%;
      margin: 0 auto;
      cursor: pointer;
      background-color: #333;
      background-color: rgb(175, 255, 168);
      color: #333;
      font-size: 1.2rem;
      cursor: pointer;
      outline-color: #333;
      border: none;
  
      :hover {
        background-color: #666;
        background-color: rgb(93, 255, 79)
      }
    }
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
    position: absolute;
    right: calc(10% + 1px);
  }

  .delete {
    display: flex;
    visibility: hidden;
    cursor: pointer;
    height: 50px;
    width: 40px;
    margin: 0;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    position: absolute;
    // right: calc(1% + 0px);
  }

  .update {
    display: flex;
    visibility: hidden;
    cursor: pointer;
    height: 50px;
    width: 40px;
    margin: 0;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    position: absolute;
    right: calc(100% + 0px);
  }

  :hover {
    .delete {
      display: flex;
      visibility: visible;
      background-color: rgb(255, 165, 165);
      color: white;

      :hover {
        background-color: rgb(255, 30, 30);
      }
    }
    .update {
      display: flex;
      visibility: visible;
      background-color: rgb(175, 255, 168);
      color: white;

      :hover {
        background-color: rgb(93, 255, 79);
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
