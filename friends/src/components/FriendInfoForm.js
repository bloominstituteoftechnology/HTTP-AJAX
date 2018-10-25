import React from 'react'; //

function FriendInfoForm (props) {
    return (
        <div>
            <form>
                <input type="text" placeholder="Placeholder Friend Info Form - FRIEND Name "/>
                <input type="text" placeholder="Placeholder Friend Info Form - FRIEND Country "/>
                <input type="text" placeholder="Placeholder Friend Info Form - FRIEND City "/>
                <input type="email" placeholder="Placeholder Friend Info Form - FRIEND Email"/>
                <input type="tel" placeholder="Placeholder Friend Info Form - FRIEND Numbers"/>
            </form>
        </div>
        )
    }

export default FriendInfoForm;