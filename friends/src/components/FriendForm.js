import React from 'react';


function FriendForm(props) {
    return (
        <React.Fragment>
            
            <form className="FriendForm" onSubmit='' >
                <input onChange='' type="text" placeholder=" Name.. " value=''  name="name" />
                <input onChange='' type="number" placeholder=" Age.. " value='' name="age"/>
                <input onChange='' type="text" placeholder=" Contact.. " value='' name="email"/>
                <button type="submit">Submit</button>
            </form>
        </React.Fragment>
    )
}

export default FriendForm;