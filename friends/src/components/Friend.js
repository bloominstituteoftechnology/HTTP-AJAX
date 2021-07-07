import React from "react";
import Form from "./Form";
const Friend = (props) => {
    return(
        <>
        <Form 
          change={props.change} 
          update={props.update}
          name={props.name}
          age={props.age}
          email={props.email}
        />
        {/* {
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
        } */}
        </>
    );
}

export default Friend;

// name={props.state.name}
// age={props.state.age}
// email={props.state.email}