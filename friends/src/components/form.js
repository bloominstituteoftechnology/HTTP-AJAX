import React, { Component } from 'react';

const Form = (props) => {
  return (
    <div>
      <form action="">
        Name: <input type="text"/> <br/>
        Age: <input type="text"/> <br/>
        Email: <input type="text"/> <br/>
        <input type="submit" value="Add"/>
      </form>
    </div>
  )
}

export default Form;