import React from 'react';
import { Link } from "react-router-dom";

const Friend = ({name, age, email, id,deleteFriendHandler}) =>{
    return(
        <li className='card tc dib br3   pa3 ma2 grow bw2 shadow-5 'key ={id}>
  <img className="card-img-top" src={`https://placeimg.com/640/480/${id}`} alt="Card image cap" />
  <div className="card-body">
    <h3 className="card-title">{name}</h3>
    <h5 className="card-title">Age: {age}</h5>
    <h5 className="card-title">{email}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to={`/friends/${id}`} ><a href="#" className="btn btn-primary">Detail</a></Link>
    <a href="#" className="btn btn-danger" onClick={deleteFriendHandler(id)} name={id}>Delete</a>
  
</div></li>
        
        
       
    )
}

export default Friend