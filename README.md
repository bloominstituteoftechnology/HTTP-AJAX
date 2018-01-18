# HTTP/AJAX

Topics:

* `axios` package
* AJAX
* Promises

## Instructions

* Run `npm i` inside the root directory of this project. Run `npm start` to start the server.
* In a separate terminal window, run `create-react-app friends` to create your starter application.
* The provided server returns a list of friends when making a `GET` request to `http://locahost:5000/friends`.
* Inside your React application create a component to display the list of friends coming from the server.
* Add a new component with a form to gather information about a new friend and a button to save the friend by making a `POST` request to the same endpoint listed above.
* Each `friend` should have the following properties:

```
{
  name: should be a string,
  age: should be a number,
  email: should be a string,
}
```

## Stretch Problems

* Separate the list of friends and the new friend form into different components and use client side routing to switch between them.
* Implement the update and delete functionality.
  * for `update` pass the friend id as a URL paremeter and the information about the friend inside the body.
  * for `delete` pass the friend id as a URL parameter.
* Style the friends list and the input field and make everything look nice.
* Expand the number of properties that you put on each friend object. Feel free to remove the dummy data on the server or modify it in any way.
