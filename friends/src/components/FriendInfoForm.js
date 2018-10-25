import React from 'react'; //
import styled from 'styled-components';

const FriendInputForm = styled.div`
display: flex;
flex-direction:column;
align-items: center;
justify-content:space-around;
width: 100%;
`

function FriendInfoForm (props) {
    return (
        <FriendInputForm>
            {/* <form className= 'friend-input'> */}
                <input type="text" placeholder="Friend Name"/>
                <br/>
                <input type="text" placeholder="Friend Country"/>
                <br/>
                <input type="text" placeholder="Friend City"/>
                <br/>
                <input type="email" placeholder="Friend Email"/>
                <br/>
                <input type="tel" placeholder="Friend Numbers"/>
            {/* </form> */}
            {/* <form className= 'friend-input'>
                <input type="text" placeholder="Placeholder Friend Info Form - FRIEND Name "/>
                <input type="text" placeholder="Placeholder Friend Info Form - FRIEND Country "/>
                <input type="text" placeholder="Placeholder Friend Info Form - FRIEND City "/>
                <input type="email" placeholder="Placeholder Friend Info Form - FRIEND Email"/>
                <input type="tel" placeholder="Placeholder Friend Info Form - FRIEND Numbers"/>
            </form> */}
        </FriendInputForm>
        )
    }

export default FriendInfoForm;