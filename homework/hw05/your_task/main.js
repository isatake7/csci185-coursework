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

    let tracksEndpoint = baseURL + "?";
    tracksEndpoint += "q=" + term + "&type=track";
    console.log("Tracks");
    console.log(tracksEndpoint);

    const tracksData = await fetch(tracksEndpoint).then(response => response.json());
    console.log(tracksData);

    const trackCard = `
        <section id="tracks">
            <section class="track-item preview">
                <img src="https://i.scdn.co/image/1aacaefb0ef07755e5a155d96ee7f1073063e428">
                <i class="fas play-track fa-play" aria-hidden="true"></i>
                <div class="label">
                    <h2>Black Swan</h2>
                    <p> BTS </p>
                </div>
            </section>
        </section>
    `;


}

async function getAlbums (term) {
    console.log(`
        get albums from spotify based on the search term
        "${term}" and load them into the #albums section 
        of the DOM...`);
}

async function getArtist (term) {
    let artistEndpoint = baseURL + "?";
    artistEndpoint += "q=" +term + "&type=artist";
    console.log(artistEndpoint);

    const artistData = await fetch(artistEndpoint).then(response => response.json());
    console.log(artistData);
    // console.log(artistData[0]);
    console.log(artistData[0].name);

    const artistCard = `
        <section class="artist-card" id="${artistData[0].id}">
            <div>
                <img src="${artistData[0].image_url}">
                <h2>${artistData[0].name}</h2>
                <div class="footer">
                    <a href="${artistData[0].spotify_url}" target="_blank">
                    View on Spotify </a>
                </div>
            </div>
        </section>
    `;
    document.querySelector("#artist").innerHTML = artistCard;


};


document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
}