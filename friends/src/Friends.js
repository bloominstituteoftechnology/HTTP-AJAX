import React from 'react';

const Friends = (props) => {
    console.log("props:", props.friendData)
    return(
        <div>
            {props.friendData.map((friendStuff, index)=>(
                    <div key={index}>
                      {friendStuff.name}
                    </div>
                )
            )}
        </div>
    )
}

export default Friends;