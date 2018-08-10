import React from 'react'; 
import './App.css';

const List = props =>{
    return(
        <div>
            {props.list.map(item=>(
                    <div className="friendList" key={item.id}>
                    <section>{item.name}</section>
                    <section>{item.age}</section>
                    <section>{item.email}</section>
                    <button onClick={()=>props.deleteFriend(item.id)}>Delete Friend</button>
                    </div>
            ))}
        </div>
    )
}
export default List; 