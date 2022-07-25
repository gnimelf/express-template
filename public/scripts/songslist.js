const copyRight = document.querySelector("footer p");
const addSongForm = document.querySelector(".song-list-section");
const serRes = JSON.parse(res);


function getSongList(){
    songsFile = fs.readFile('../../db/songs.json');
    console.log(songsFile);
    // songsFile.forEach(song => {
    //     console.log(songsFile);
    // });
}

function loadHTML(){
    
}


// Copyright generator
const year = new Date().getFullYear();
copyRight.append(` ${year} Justin Fleming`)