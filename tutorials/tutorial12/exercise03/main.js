const restaurants = [
    "Suwana's Thai Orchid", 
    "Khao Thai Cuisine", 
    "Little Bee Thai", 
    "PIE.ZAA Pizza", 
    "Fahrenheit Pizza & Brewhouse", 
    "Fresh Wood Fired Pizza West", 
    "Wasabi", 
    "Red Ginger Dimsum And Tapas", 
    "Murasaki Asheville"
];


function displayResults() {
    for (let i = 0; i < restaurants.length; i++) {
        document.querySelector("#output").innerHTML += restaurants[i] + "<br>";
        console.log(restaurants);
    }
}

displayResults();
