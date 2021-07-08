import React from 'react';


const Friend = props => {
  if (props.item){
    // console.log(props);
    return (
      <React.Fragment>
      <ol key={props.item.id} onClick={() => props.selectFriend(props.item)}>
        <li>{props.item.name}</li>
        <li>{props.item.age}</li>
        <li>{props.item.email}</li>
      </ol>
      <button onClick={(event) => props.deleteIt(event, props.item.id)}>
          Delete Friend</button>
      </React.Fragment>
    )
  } else {return ''}
}

export default Friend
