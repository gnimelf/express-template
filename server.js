// import libraries
const express = require("express");

// setup express server properties
const app = express();
const port = 3001;

// use the following code to serve images, CSS files, and JavaScript files in a directory named public:
app.use(express.static("public"));

//  ROUTES

//  Middleware functions are functions that have access to the request object (req),
//  the response object (res), and the next function in the application’s request-response cycle.

//  Route definition: app.METHOD(PATH, HANDLER)
//  METHOD:
//  CREATE  -   POST method
//  READ    -   GET method
//  UPDATE  -   PUT method
//  DELETE  -   DELETE method
//  app is an instance of express.
//  METHOD is an HTTP request method, in lowercase.
//  PATH is a path on the server.
//  HANDLER is the function executed when the route is matched.
app.get("/", (req, res) => {
  res.send('./index.html');
});

// GET params sent from client url
app.get("/repsonse:firstParm", (req, res) => {
  if (req.params.firstParm === "firstParam") {
    res.send();
  } else {
    res.send("this is the wrong response");
  }
});

//SET SERVER TO LISTEN ON localhost ON GIVE A PORT;
app.listen(port, () => {
  console.log(`Server running @ http://localhost:${port}`);
});
