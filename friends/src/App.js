import React, { Component } from 'react';
import FriendsList from './components/FriendsList';
import PostForm from './components/PostForm';
import UpdateForm from './components/UpdateForm';
import Menu from './components/Menu';
import PostMessage from './components/PostMessage';
import DeleteMessage from './components/DeleteMessage';
import {Route} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const InputFormContainer = styled.div`
  max-width: 70%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`;

const FixedMenu = styled.div`
  position: fixed;
`;

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      postSuccess: false,
      deleteSuccess: false
    };
  }

  componentDidMount(){
    axios
    .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({friends: response.data});
      })
      .catch(err => {
        console.log(err);
      });
  };

  postToServer = info => {
    axios
    .post('http://localhost:5000/friends', info)
      .then(response => {
        this.setState({
          friends: [
            ...this.state.friends,
            info
          ],
          postSuccess: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  updateToServer = (info, id) => {
    axios
    .put(`http://localhost:5000/friends/${id}`, info)
      .then(response => {
        this.setState({
          friends: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteFromServer = id => {
    axios
    .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({
          friends: response.data,
          deleteSuccess: true
        });
      })
      .catch(err => console.log(err));
  };

  removeSuccessMessage = () => {
    this.setState({postSuccess: false});
  };

  removeDeleteMessage = () => {
    this.setState({deleteSuccess: false});
  };

  render() {
    return (
      <AppContainer>
        <Route
          path='/'
          render={(props) =>
            <FriendsList {...props}
              friends={this.state.friends}
              deleteFromServer={this.deleteFromServer}
              removeDeleteMessage={this.removeDeleteMessage}
            />
          }
        />
        <InputFormContainer>
          <FixedMenu>
            <Route path='/' component={Menu} />
            {this.state.postSuccess ? <PostMessage/> : null}
            {this.state.deleteSuccess ? <DeleteMessage/> : null}
            <Route
              path='/post'
              render={(props) =>
                <PostForm {...props}
                  postToServer={this.postToServer}
                  removeSuccessMessage={this.removeSuccessMessage}
                />
              }
            />
            <Route
              path='/update'
              render={(props) =>
                <UpdateForm {...props}
                  updateToServer={this.updateToServer}
                  friends={this.state.friends}
                />
              }
            />
          </FixedMenu>
        </InputFormContainer>
      </AppContainer>
    );
  }
}

export default App;
