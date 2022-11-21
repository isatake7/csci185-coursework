const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

function search (ev) {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

async function getTracks (term) {
    /*
    1. Create the url based on the search term
    2. Send off the request to spotify and save the date to a variable
    3. Display the tracks in a nice way to the HTML
    */

    document.querySelector("#tracks").innerHTML = "";

    let trackEndpoint = baseURL + "?";
    trackEndpoint += "q=" + term + "&type=track";

    const trackData = await fetch(trackEndpoint).then(response => response.json());
    console.log(trackData);

    if (trackData.length == 0) {
        document.querySelector("#tracks").innerHTML = "Not found";
    } else {
        for (let i = 0; i < 5; i++){
        
            const trackCard = `
                <section id="tracks">
                    <section class="track-item preview" onclick="playMusic('${trackData[i].id}')" >
                        <img src="${trackData[i].album.image_url}" alt = "${trackData[i].name} track image">
                        <i class="fas play-track fa-play" aria-hidden="true"></i>
                        <div class="label">
                            <h2>${trackData[i].name}</h2>
                            <p> ${trackData[i].artist.name} </p>
                        </div>
                    </section>
                </section>
            `;
    
            document.querySelector("#tracks").innerHTML += trackCard;
        }
    }



}

function playMusic(trackid) {
    document.querySelector("#artist-section h1").innerHTML = "Now Playing";

    const nowPlaying = `
        <iframe style="border-radius:12px" 
            src="https://open.spotify.com/embed/track/${trackid}?utm_source=generator&theme=0" 
            width="100%" 
            height="152" 
            frameBorder="0" 
            allowfullscreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy">
        </iframe>
    `;
    document.querySelector("#artist").innerHTML = nowPlaying;
}

async function getAlbums (term) {

    document.querySelector("#albums").innerHTML = "";


    let albumEndpoint = baseURL + "?";
    albumEndpoint +=  "q=" + term + "&type=album";

    const albumData = await fetch(albumEndpoint).then(response => response.json());
    //console.log(albumData);

    if (albumData.length == 0) {
        document.querySelector("#albums").innerHTML = "Not found";

    } else {
        for (i = 0; i < albumData.length; i++) {
            const albumCard = `
                <section class="album-card" id="${albumData[i].id}">
                    <div>
                        <img src="${albumData[i].image_url}" alt = "${albumData[i].name} album cover" >
                        <h2>${albumData[i].name}</h2>
                        <div class="footer">
                            <a href="${albumData[i].spotify_url}" target="_blank">
                            View on Spotify </a>
                        </div>
                    </div>
                </section>
            `;

            document.querySelector("#albums").innerHTML += albumCard;
        }
    }
}   


async function getArtist (term) {

    document.querySelector("#artist").innerHTML = "";


    let artistEndpoint = baseURL + "?";
    artistEndpoint += "q=" +term + "&type=artist";

    const artistData = await fetch(artistEndpoint).then(response => response.json());
    //console.log(artistData);

    if (artistData.length == 0) {
        document.querySelector("#artist").innerHTML = "Not found";
    } else {
        const artistCard = `
            <section class="artist-card" id="${artistData[0].id}">
                <div>
                    <img src="${artistData[0].image_url}" alt="image of artist searched">
                    <h2>${artistData[0].name}</h2>
                    <div class="footer">
                        <a href="${artistData[0].spotify_url}" target="_blank">
                        View on Spotify </a>
                    </div>
                </div>
            </section>
        `;

        document.querySelector("#artist").innerHTML = artistCard;
    }


};

document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
}