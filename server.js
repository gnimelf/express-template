// import libraries
const express = require("express");
const fs = require('fs');
const songsDb = require('./db/songs.json');

// setup express server properties
const app = express();
const port = 3001;

// use the following code to serve images, CSS files, and JavaScript files in a directory named public:
app.use(express.static("public"));

// for parsing application/json (from post headers) will automatically part req.body
app.use(express.json())

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

// GET 
app.get("/songs", (req, res) => {
    res.json(songsDb);
});

app.post("/api/addsong", (req, res)=>{
    const {song, artist} = req.body;
    console.log(req.body);
    if (song != "" && artist != ""){
        res.send(req.body);
        const newSong = {
            song,
            artist
        };

        // add new song
        songsDb.push(newSong);

        // convert songDb to a string
        const songString = JSON.stringify(songsDb);

        //write song to file
        fs.writeFileSync('./db/songs.json', songString)

        console.log("success");
    }
})

//SET SERVER TO LISTEN ON localhost ON GIVE A PORT;
app.listen(port, () => {
  console.log(`Server running @ http://localhost:${port}`);
});
