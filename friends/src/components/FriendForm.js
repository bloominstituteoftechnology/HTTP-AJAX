import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
    align-items: center;
    margin: 0 auto;
    max-width: 400px;
    width: 100%;
`;

const FriendForm = props => {
        return (
            <Container>
                <form>
                    <fieldset>
                        <label for="nameField">Name</label>
                        <input type="text" placeholder="John Spraul" id="nameField" />
                        <label for="emailField">Email</label>
                        <input type="text" placeholder="🧖🏼‍♂️@gmail.com" id="emailField"/>
                        <label for="ageField">Age</label>
                        <input type="text" placeholder="100" id="ageField" />
                        <input class="button-primary" type="submit" value="Send" />
                    </fieldset>
                </form>
            </Container>
        )
}

export default FriendForm;