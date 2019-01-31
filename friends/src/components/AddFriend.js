import React from 'react'
import styled from 'styled-components'

const AddFriend = props => {
    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder="Name"
                />
                <input
                    type="text"
                    placeholder="Age"
                />
                <input
                    type="text"
                    placeholder="eMail"
                />
                <button type="submit">New Friend</button>
            </form>
        </div>
    )
}

export default AddFriend;