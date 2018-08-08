import React from 'react'; 
import { Link } from "react-router-dom";


 const List = props =>{
    return(
        <div>
            {props.list.map(item=>{
                return(
                    <div key={item.id}>
                    <section>{item.name}</section>
                    </div>
                )
            })}
        </div>
    )
}
export default List;