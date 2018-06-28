import React from 'react'
import { Card, BodyCard } from './FriendsListStyles.js'
import Friend from '../Friend'
import AddFriendInput from '../AddFriendInput'

const FriendsList = (props) => {
  return (
    <div>
      {props.friends.map((friend) => {
        return (
          <div>
            <AddFriendInput
              value={props.value}
              handleChange={props.handleChange}
              handleSubmit={props.handleSubmit}
            />
            <Card key={friend.id}>
              <BodyCard>
                <Friend friendId={friend.id} friend={friend} />
              </BodyCard>
            </Card>
          </div>
        )
      })}
    </div>
  )
}

export default FriendsList
