import styled from 'styled-components';

export const FriendsWrapper = styled.div`
  max-width: 600px;
  width: 50%;
  border: 5px solid #6b0404;
  margin: 50px auto;
  padding: 10px;
  font-size: 1.8rem;
  background-color: #f7decf;
`

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  i {
    margin-right: 50px;
  }
`

export const FriendWrapper = styled.div`
  margin: 10px;
  padding: 10px;
  border: 1px solid #913f3f;
  font-family: 'Staatliches', cursive;
  font-size: 1.8rem; 
  background-color: #fff;
  width: 80%;
`

export const Info = styled.div`
  color: #6b0404;
  display: inline-block;
  margin-right: 10px;
` 

export const BtnWrapper = styled.div`
  width: 100%;
  text-align: center;
`

export const Btn = styled.button`
  width: 20%;
  margin: 0 auto;
  margin-top: 10px;
  color: #913f3f;
  background-color: #fff;
  outline: none;
  padding: 8px;
  font-size: 1.6rem;
  font-family: 'Staatliches', cursive;
  :hover {
    color: #fff;
    background-color: #913f3f;
  }
`

export const AddForm = styled.form`
  width: 40%;
  border: 5px solid #6b0404;
  margin: 50px auto;
  padding: 10px;
  background-color: #f7decf;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.5rem;
  font-family: 'Staatliches', cursive;
  
  input {
    padding: 5px;
    margin-bottom: 10px;
    border: 1px solid #913f3f;
    outline: none;
    :hover {
      background-color: #913f3f;
    }
  }
`

