import React from 'react';


const Friends = (props) => {
    return(
        <div>
            {props.friendData.map((friendStuff, index) => (
                <div key={index}>
                    {friendStuff.name}    
                </div>
            )
            )}
        </div>
    )
}

export default Friends;