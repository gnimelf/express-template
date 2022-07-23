const copyRight = document.querySelector("footer p");
const addSongForm = document.querySelector(".add-song");


function postSong (info){
    //Fetch accepts a URL and an options object where you can declare the HTTP method, the request body, and any headers.
    fetch('/api/addsong', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(info)
    })
    .then((response) => response.json())
    .then((data)=>{
        alert(data);
        return data;
        // need fetch to redirect to songs page
    }).catch((error)=>{
        console.log(error);
    });
    // fetch('/songs', {
    //     method: 'GET',
    //     headers: {

    //     }
    // })
}

addSongForm.addEventListener('submit', (e) => {
    console.log('form submitted');

    const songName = document.querySelector('#song-name');
    const artistName = document.querySelector('#artist-name');

    // Create a json
    const songInfo = {
        'song': songName.value,
        'artist': artistName.value
    }
    postSong(songInfo);
})

// Copyright generator
const year = new Date().getFullYear();
copyRight.append(` ${year} Justin Fleming`)