import React from 'react'
import { Card, BodyCard } from './FriendsListStyles.js'
import Friend from '../Friend'

const FriendsList = (props) => {
  return (
    <div>
      {props.friends.map((friend) => {
        return (
          <Card key={friend.id}>
            <BodyCard>
              <Friend friendId={friend.id} friend={friend} />
            </BodyCard>
          </Card>
        )
      })}
    </div>
  )
}

export default FriendsList
