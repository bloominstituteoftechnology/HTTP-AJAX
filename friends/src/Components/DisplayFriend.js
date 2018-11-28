import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div``;

const DivName = styled.div`
  text-align: center;
  font-size: 48px;
  border: 2px solid black;
  border-radius: 10px;
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const DisplayFriend = props => {
  console.log(props);
  let friendInfo = props.friends.find(
    friend => `${friend.id}` === props.match.params.id
  );
  return (
    <DivWrapper>
      <DivName>{friendInfo.name}</DivName>
      <h3>Age: {friendInfo.age}</h3>
      <h3>Email: {friendInfo.email}</h3>
    </DivWrapper>
  );
};

// DisplayFriend.propTypes = {
//   propertyName: PropTypes.string
// }

export default DisplayFriend;
