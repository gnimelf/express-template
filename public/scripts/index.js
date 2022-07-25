const copyRight = document.querySelector("footer p");
const addSongForm = document.querySelector(".add-song");


// function postSong (info){
//     //Fetch accepts a URL and an options object where you can declare the HTTP method, the request body, and any headers.
//     fetch('/add', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(info)
//     })
//     .then((res) => console.log(res.json()))
//     .then((data)=>{
//         return data;
//     }).catch((error)=>{
//         console.log(error);
//     })
// }

addSongForm.addEventListener('submit', (e) => {
    
    // const songName = document.querySelector('#song-name');
    // const artistName = document.querySelector('#artist-name');

    // // Create a json
    // const songInfo = {
    //     'song': songName.value,
    //     'artist': artistName.value
    // }
    // postSong(songInfo);

});

// Copyright generator
const year = new Date().getFullYear();
copyRight.append(` ${year} Justin Fleming`)