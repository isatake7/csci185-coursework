// code that picks a random number between 1 and 100:
const secret = Math.floor(Math.random() * 99) + 1;
document.querySelector('#secret').innerHTML = secret;


//Step 3: check if user guessed right
//        guess === secret: you win!
//        guess < secret: too low!
//        guess > secret: too high!

let attempts = 0;

function check() {
    //tally up their guesses
    attempts++;

    //Step 1: get what the user typed into the input and store 
    //        in the variable
    let userGuess = document.querySelector('#guess').value;
    console.log(userGuess);

    //Step 2: convert the value stored in the variable to a number

    userGuess = Number(userGuess);

    //Step 3
    if (attempts <= 5) {
        if (userGuess < secret) {
            console.log("Guess too low!");
            document.querySelector('#message').innerHTML = "Guess too low!";
        } else if (userGuess > secret) {
            console.log("Guess too high!");
            document.querySelector('#message').innerHTML = "Guess too high!";

        } else {
            console.log("You got it!");
            document.querySelector('#message').innerHTML = "You got it! You win!";
            document.querySelector('#num-guesses').innerHTML = "It took you " + attempts + " tries!";
            document.querySelector('#celebrate').className = '';
        }
    } else {
        document.querySelector('#num-guesses').innerHTML = "You have exceeded 5 tries";
        document.querySelector('#message').innerHTML = "";

        // check();
        // return;
    }

}