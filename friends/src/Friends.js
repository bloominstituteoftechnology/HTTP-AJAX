import React from 'react';

export default class Friends extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.friends.map(f => {
            return (
              <React.Fragment>
                <h1>{f.name}</h1>
                <p>{f.age}</p>
                <p>{f.email}</p>
              </React.Fragment>
            )
          })
        }
      </div>
    )
  }
}