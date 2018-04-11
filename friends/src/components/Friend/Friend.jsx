import React from "react"

const Friend = ({ name, email, age }) => (
  <div className="Friend">
    <p className="Friend--blurb">
      My name is {name}. I am {age} years old and my email is {email}
    </p>
  </div>
)

export default Friend
