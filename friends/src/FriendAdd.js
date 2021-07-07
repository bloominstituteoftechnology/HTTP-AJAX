import React, { Component } from 'react';
import './FriendAdd.css';

class FriendAdd extends Component {
    constructor () {
        super();
        this.state = {
            friends: [],
            inputValue: ""
          };
    }
      

      handleChange = event => {
        this.setState({ inputValue: event.target.value });
      };
      handleSubmit = event => {
        const Friends = this.state.friends.concat({name: this.state.inputValue });
        this.setState({ friends: Friends, inputValue: "" });
        event.preventDefault();
      };
      render() {
        return (
          <div className="friend-add">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                value={this.state.inputValue}
                onChange={this.handleChange}
              />
              <input type="submit" value="Add a Name" />
            </form>
          </div>
        );
      }

    // handleChangeAge () {
    //   this.setState({ newFriend: event.target.value });
    // }
}

export default FriendAdd;

//in button: onChange={this.handleChangeAge} & onChange={this.handleChangeName} 

// handleChange = (event) => {
//     this.setState({ inputValue: event.target.value });
//   }
//   handleSubmit = (event) => {
//     const todos = this.state.todos.concat({ 
//       text: this.state.inputValue, 
//       completed: false 
//     });
//     this.setState({ todos: todos, inputValue: "" }, this.updateLocalStorage);
//     event.preventDefault();
//   }
//   handleDelete = (event) => {
//     const todos = this.state.todos;
//     todos.splice(event.target.id, 1);
//     this.setState({ todos: todos }, this.updateLocalStorage);
//   }
//   componentDidMount = () => {
//     const todos = window.localStorage.getItem("todos");
//     if (todos !== undefined) {
//       this.setState({ todos: JSON.parse(todos) });
//     }
//   }
//   componentWillUnmount = () => {
//     this.updateLocalStorage();
//   }
//   updateLocalStorage = () => {
//     window.localStorage.setItem("todos", JSON.stringify(this.state.todos));
//   }

//   render = () => {
//     return (
//       <div className="todo-container">
//         <div className="todo-list">
//           {this.todoElements()}
//         </div>
//         <form onSubmit={this.handleSubmit}>
//           <input 
//             type="text" 
//             value={this.state.inputValue}
//             onChange={this.handleChange} />
//           <input
//             type="submit"
//             value="Add Todo" />
//         </form>
//       </div>
//     );
//   };