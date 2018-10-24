import React from 'react'
import { FriendFormContainer} from './styledComponents'

const NewFriendForm = () =>{



    return(
        <FriendFormContainer>
            <form action="">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name"/>
                <label htmlFor="age">Age:</label>
                <input type="text" name="age"/>
                <label htmlFor="email">Email:</label>
                <input type="text" name="email"/>
                <button>Add Friend</button>
            </form>
        </FriendFormContainer>
    )


}

export default NewFriendForm;