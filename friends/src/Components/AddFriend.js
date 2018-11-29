import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div``;

/***************************************************************************************************
 ********************************************** Methods ********************************************
 **************************************************************************************************/
const newFriend = (id, name, age, email) => {
  return {
    id: id,
    name: name,
    age: age,
    email: email
  };
};

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const AddFriend = props => {
  return (
    <DivWrapper>
      <form
        onSubmit={() =>
          props.addFriend(
            newFriend(
              props.friends[props.friends.length - 1].id + 1,
              props.newName,
              props.newAge,
              props.newEmail
            )
          )
        }
      >
        <h2>
          Name:{' '}
          <input type='text' name='newName' onChange={props.changeHandler} />
        </h2>

        <h2>
          Age:{' '}
          <input type='text' name='newAge' onChange={props.changeHandler} />
        </h2>

        <h2>
          Email:{' '}
          <input type='text' name='newEmail' onChange={props.changeHandler} />
        </h2>
        <input type='submit' placeholder='addfriend' value='Add Friend' />
      </form>
    </DivWrapper>
  );
};

// AddFriend.propTypes = {
//   propertyName: PropTypes.string
// }

export default AddFriend;
