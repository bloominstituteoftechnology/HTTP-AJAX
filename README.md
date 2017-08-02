# Redux & React

Topics:

 * `redux-promise` package
 * `axios` package
 * AJAX
 * Promises
 * Middleware


## Project Description

### Initialize Project
  * Run `npm i` inside of the server folder to install its dependencies.  Run `node server.js` to start the server. - DONE √
  * Run `create-react-app friends` in a SEPARATE folder to create your starter application. - I DID THIS IN THE TOP LEVEL AND NOW HAVE THE REACT APP FOLDER `~/LS-AJAX/friends/` WAS THIS NOT YOUR INTENTION? - DONE√
  * `npm i --save redux react-redux redux-promise axios` This command will install the needed dependencies. FROM WITHIN `~/LS-AJAX/friends/` I RAN THIS COMMAND - DONE√
  * You will create a list of your friends using React and Redux. - OKAY √
  * The general flow of steps will be to: - I'M STILL NOT 100% ON THE IMPLEMENTATION STEPS
    1. create your store, - DONE √
    2. create your reducers, - DONE √
    3. create your containers, - DONE √
    4. and then create the action creators. - DONE √
  * You will need to use `ReduxPromise` as a middleware inside of `src/index.js`. - DONE √
  * Create two actions. - DONE √
    1. One action will retrieve the friends list from the server. - HTTP Mini Sprint, axios.get() - DONE √
    2. The second action will add a new friend to the friends list on the server. axios.post() - DONE √


### State Tree
  * Your application should have an input field, a submit button, and a list of items that represents your friends list.  Make each friend a separate component. - DONE √
  * Your application's state tree should have a single property called `friends`.  It should take the same form as the object shown below. - DONE √
   ```
  {
    friends: [],
  }
  ```
  * Each `friend` item that is in the `friends` array should have the following format:
  ```
  {
    name: 'Stephanie',
    age: 24,
    email: 'stephanie@gmail.com',
  }
  ```


### React
  * When you type a new friend's name into the input field and press the submit button you should call an action creator that adds a new friend item to the `friends` array on the application state tree. - DONE √
  * When the user presses submit you will invoke the appropriate action creator which will then have its new action fed through all of the reducers. - DONE √
  * You will display the friends list by creating a container that receives the application's `friends` array as a prop.  That container then uses `map` to display the array. - DONE √


### Notes/Hints
 * You will only need one reducer.  This reducer will control the `friends` array property on the state tree. - DONE √
 * You will have several action creators.  One for adding a new friend and another for retrieving the friends list from the server. - DONE √
 * Containers require `connect` and a `mapStateToProps(state)` function to read from the state tree. - DONE √
 * Actions require you to create a `mapDispatchToProps(dispatch)` function that you'll also pass to the `connect` function. - WE DIDN'T USE DISPATCH, WHY???????????


## Extra Credit
 * Style the friends list and the input field and make everything look nice. - DONE √
 * Expand the number of properties that you put on each friend object.  Feel free to remove the dummy data on the server or modify it in any way. - JESH AND I HAVE A GOOD UNDERSTANDING OF HOW TO IMPLEMENT THIS √
