// import libraries
const express = require("express");
const fs = require("fs");
const songsDb = require("./db/songs.json");
const path = require('path');

// setup express server properties
const app = express();
const port = 3001;

// use the following code to serve images, CSS files, and JavaScript files in a directory named public:
app.use(express.static("public"));

// for parsing application/json (from post headers) will automatically part req.body
app.use(express.json());

// Allows reading of the body of the req data from post req
app.use(express.urlencoded({ extended: true }));

//  ROUTES
app.get("/", (req, res) => {
  res.send("./index.html");
});

// GET
app.get("/songs", (req, res) => {
  // res.json(songsDb);
  const html = "/public/pages/songlist.html";
  res.json({html: html.toString, songsDb: songsDb});
});


app.get("/api/addSong", (req, res) => {
  res.send("./index.html");
});

app.post("/", (req, res) => {
  console.log(req.body);
  let { song, artist } = req.body;
  if (song && artist ) {
    
    const newSong = {
      song,
      artist,
    };

    // add new song
    songsDb.push(newSong);

    // convert songDb to a string
    const songString = JSON.stringify(songsDb, null, "\t");

    //write song to file
    fs.writeFile("./db/songs.json", songString, (err) => {
      if (err) {
        console.log(err);
      }
      
    });
    res.redirect("/songs");
    song = '';
  } else {
    console.log("song or artist is blank")
  }
  
});

//SET SERVER TO LISTEN ON localhost ON GIVE A PORT;
app.listen(port, () => {
  console.log(`Server running @ http://localhost:${port}`);
});
