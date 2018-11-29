import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div``;

const DivName = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 72px;
  border: 3px solid black;
  background-color: rgba(0, 0, 0, 0.4);
`;

const H1NotFoundMsg = styled.h1`
  text-align: center;
`;

const ButtonEdit = styled.button`
  margin: 10px 0;
  border-radius: 5px;
  outline: none;
  background: linear-gradient(to top, #00c800, #008c00);
  border-color: #008c00;
  cursor: pointer;
  width: 200px;
  font-size: 24px;
  font-weight: bold;

  &:active {
    background: linear-gradient(to top, #008c00, #00c800);
  }
`;

const ButtonDelete = styled.button`
  margin: 10px 0;
  border-radius: 5px;
  outline: none;
  background: linear-gradient(to top, #ff0000, #a00000);
  border-color: #a00000;
  cursor: pointer;
  width: 200px;
  font-size: 24px;
  font-weight: bold;

  &:active {
    background: linear-gradient(to top, #a00000, #ff0000);
  }
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const DisplayFriend = props => {
  let friendInfo = props.friends.find(
    friend => `${friend.id}` === props.match.params.id
  );
  if (friendInfo) {
    return (
      <DivWrapper>
        <DivName>
          <ButtonEdit
            type='button'
            onClick={() =>
              props.history.push(
                `${props.urlLinks.editFriend}/${friendInfo.id}`
              )
            }
          >
            Edit Friend
          </ButtonEdit>
          {friendInfo.name}
          <ButtonDelete
            onClick={e => {
              props.deleteFriend(e, friendInfo.id);
              props.history.push(props.urlLinks.home);
            }}
          >
            Delete Friend
          </ButtonDelete>
        </DivName>
        <h1>Age: {friendInfo.age}</h1>
        <h1>Email: {friendInfo.email}</h1>
      </DivWrapper>
    );
  }

  return (
    <DivWrapper>
      <H1NotFoundMsg>Friend Not Found</H1NotFoundMsg>
    </DivWrapper>
  );
};

// DisplayFriend.propTypes = {
//   propertyName: PropTypes.string
// }

export default DisplayFriend;
