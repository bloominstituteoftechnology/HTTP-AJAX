import React from "react";

const Friends = (props) => {

    return(
        <>
        {
            props.friends.map(e =>  (
                <div key={e.id} className="friendWrapper">
                    <div className="friend" >
                        <div>Name:{e.name}</div>
                        <div>Age:{e.age}</div>
                        <div>Email:{e.email}</div>
                    </div>
                    <div className="update"
                        id={e.id} 
                        onClick={props.update} 
                        >
                        Update
                    </div>
                    <div className="delete"
                        id={e.id} 
                        onClick={props.delete} 
                        >
                        X
                    </div>
                </div>
                )
            )
        }
        </>
    );
}

export default Friends;

// if(this.state.friends.length>prevProps.friends.length)