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
  font-size: 48px;
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
`;

const ButtonDelete = styled.button`
  margin: 10px 0;
  border-radius: 5px;
  outline: none;
  background: linear-gradient(to top, #ff0000, #a00000);
  border-color: #a00000;
  cursor: pointer;
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const DisplayFriend = props => {
  console.log(props.friends);
  let friendInfo = props.friends.find(
    friend => `${friend.id}` === props.match.params.id
  );
  if (friendInfo) {
    return (
      <DivWrapper>
        <DivName>
          <ButtonEdit type='button'>Edit Friend</ButtonEdit>
          {friendInfo.name}
          <ButtonDelete type='button'>Delete Friend</ButtonDelete>
        </DivName>
        <h3>Age: {friendInfo.age}</h3>
        <h3>Email: {friendInfo.email}</h3>
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
