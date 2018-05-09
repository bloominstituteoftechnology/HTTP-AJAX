import React from 'react';

const Friends = (props) => {
    return(
        <div>
            {props.friendData.map((friendStuff, index)=>{
                return(
                    <div key={index[0]}>
                        {friendStuff}
                    </div>
                )
            })}
        </div>
    )
}

export default Friends;