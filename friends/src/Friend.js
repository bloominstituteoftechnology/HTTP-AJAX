import React from 'react';

class Friend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          inputValue= '',
          friends : []
        }
    }

    handleChange = (event) => {
      this.setState({ inputValue: event.target.value });
    }

    handleSubmit = (event) => {
      const todos = this.state.todos.concat({
        text: this.state.inputValue,
        completed: false
      });
      this.setState({ todos: todos, inputValue: "" }, this.updateLocalStorage);
      event.preventDefault();
    }

    render() {
        return (
          <div className="friend-add">

            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                value={this.state.inputValue}
                onChange={this.handleChange} />
              <input
                type="submit"
                value="Add Todo" />
            </form>
          </div>

        );
    }
}


/////////////////////////////



handleDelete = (event) => {
  const todos = this.state.todos;
  todos.splice(event.target.id, 1);
  this.setState({ todos: todos }, this.updateLocalStorage);
}

componentWillUnmount = () => {
  this.updateLocalStorage();
}
updateLocalStorage = () => {
  window.localStorage.setItem("todos", JSON.stringify(this.state.todos));
}





render = () => {
    return (

    );
  };

export default Friend;
