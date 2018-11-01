import React from 'react'
import PropTypes from 'prop-types'

const FriendForm = props => {
    return (
        <form>
          <input
            type="text"
            placeholder="name..."
            value={props.name}
            name="name"
            onChange={props.onChangeHandler}
          />
          <input
            type="text"
            placeholder="age..."
            value={props.age}
            name="age"
            onChange={props.onChangeHandler}
          />
          <input
            type="text"
            placeholder="email..."
            value={props.email}
            name="email"
            onChange={props.onChangeHandler}
          />
        </form>
    )
}

FriendForm.PropTypes = {

}

export default FriendForm