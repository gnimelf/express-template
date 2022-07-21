// import libraries
const express = require('express');


// setup express server properties
const app = express();
const port = 3001;


// Routes





// set server to listen for calls
app.listen(port, ()=>{
    console.log(`Server running @ http://localhost:${port}`)
})