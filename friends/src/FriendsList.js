//create a component to display a list of friends coming from server

//HOW TO USE AXIOS FOR A GET METHOD
// axios     
//     .get(`http://somecoolurl.com`)
//        .then(response => {
//          response is the response we get back from the server
//          in react we set the state of our component with the data that we get back from the request. 
//        })
//        .catch(err => {
//          if something goes wrong, we handle any errors here
//        });


//HOW TO USE AXIOS FOR A POST METHOD
// axios     
// .post(`http://somecoolurl.com`, {someData: this is typically form data})
//    .then(response => {
//      response is the response we get back from the server
//      usually on a positive response, we either re-set the state in React OR we navigate to the next page etc.
//    })
//    .catch(err => {
//      if something goes wrong, we handle any errors here
//    });