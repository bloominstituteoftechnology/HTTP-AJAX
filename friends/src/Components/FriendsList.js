import React from 'react';
import FriendCard from './FriendCard.js'
import FriendForm from './FriendForm.js'
import {Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom'

const FriendsList = ({friends, deleteFriend, selectFriend, addFriend, inputName, inputAge, inputEmail, handleInputChange, updateFriend, isUpdate}) => {
  console.log('func', isUpdate)

  return (
    
      <div className={'friends-list'}>

        <h1>Friend APP</h1>
        <NavLink to='/'>Home </NavLink>
        <NavLink to='/add'>Add </NavLink>
        <Route path={`/friend/:id`} render={ props => {
          return (
            <React.Fragment>
              <NavLink to={`/friend/${isUpdate.id}/edit`}>Edit </NavLink> <NavLink onClick={ e => deleteFriend(e, props.match.params.id)} to={`/`}>Delete </NavLink> 

            </React.Fragment>
          ) } } />

        <Route path={'/add'} render={ props => {
          return (
            <FriendForm 
              {...props}
              addFriend={addFriend}
              handleInputChange={handleInputChange}
              inputName={inputName} 
              inputAge={inputAge} 
              inputEmail={inputEmail}
            />
          )
        } }/>

        <Route path={'/friend/:id/edit'} render={ props => {
          return (
            <FriendForm 
              {...props}
              isUpdate={isUpdate}
              updateFriend={updateFriend}
              handleInputChange={handleInputChange}
              inputName={inputName} 
              inputAge={inputAge} 
              inputEmail={inputEmail}
            />
          )
        } }/>
        

        {friends.map( friend => {

          return (

            <React.Fragment key={friend.id}>
              <Route exact path={'/'} key={friend.id}  render={() => {

                return(

                  <NavLink 
                    onClick={() => selectFriend(friend)}
                    to={`/friend/${friend.id}`}>

                    <FriendCard 
                      friend={friend}
                    />
                  </NavLink>
                )
              }}/>
              
              <Route path={`/friend/${friend.id}`} render={ props => {
                return <FriendCard 
                {...props}
                key={friend.id}
                friend={friend}
                deleteFriend={deleteFriend}
                />
              }}/>
            </React.Fragment>
            ) 
        })}
      </div>
  );
}

export default FriendsList;