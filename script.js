// let num = 1;

// while (num <= 101){
//     if(num % 2 ==0){
//         console.log(num)
//     }
//     num++
// }


// for (let num = 1 ; num <= 101; num++){
//     if(num % 2 !== 0){
//         console.log(num)
//     }
// }

// let gameNum = 25;

// let usernum = prompt ("guess your no:")
// let size = 1;


// while (usernum != gameNum){
//     if(usernum < gameNum){
//     usernum = prompt("number is bigger than that, guess again:")
//     } else {
//         usernum = prompt("the actual number is smaller than that, guess again:")
//     }
//     size = size+1;
// }



//  if (usernum == gameNum){
// console.log("Congrats, you guessed the right number in" , size ,"attempts" )
//  }


// // Generate a random number between 1 and 100
// const randomNumber = Math.floor(Math.random() * 100) + 1;

// // Number of attempts allowed
// let attempts = 10;

// // Function to start the game
// function startGame() {
//     // Loop until the player runs out of attempts or guesses correctly
//     while (attempts > 0) {
//         // Prompt the user to guess a number
//         const guess = parseInt(prompt("Guess a number between 1 and 100:"));

//         // Check if the guess is correct
//         if (guess === randomNumber) {
//             alert("Congratulations! You guessed the correct number!");
//             break; // Exit the loop
//         } else {
//             // Provide feedback to the user
//             if (guess > randomNumber) {
//                 alert("Too high. Try again!");
//             } else {
//                 alert("Too low. Try again!");
//             }

//             // Decrement the number of attempts
//             attempts--;
//         }
//     }

//     // If the player runs out of attempts, display a message
//     if (attempts === 0) {
//         alert("Sorry, you've run out of attempts. The correct number was " + randomNumber + ".");
//     }
// }

// // Start the game
// startGame();





// Function to start the game
function startGame() {
    // Prompt the user to choose the range of numbers
    const minNumber = parseInt(prompt("Enter the minimum number in the range:"));
    const maxNumber = parseInt(prompt("Enter the maximum number in the range:"));

    // Validate the input
    if (isNaN(minNumber) || isNaN(maxNumber) || minNumber >= maxNumber) {
        alert("Invalid range. Please enter valid numbers.");
        return; // Exit the function
    }

    // Generate a random number within the specified range
    const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

    // Number of attempts allowed
    let attempts = 5;

    // Loop until the player runs out of attempts or guesses correctly
    while (attempts > 0) {
        // Prompt the user to guess a number
        const guess = parseInt(prompt(`REMAINING ATTEMPTS= ${attempts}, You may Guess a number between ${minNumber} and ${maxNumber}:`));

        // Check if the guess is correct
        if (guess === randomNumber) {
            alert(`Congratulations! You guessed the correct number (${randomNumber}) in ${5 - attempts + 1} attempts!`);
            break; // Exit the loop
        } else {
            // Provide feedback to the user
            if (guess > randomNumber) {
                alert("Too high. Try again!");
            } else {
                alert("Too low. Try again!");
            }

            // Decrement the number of attempts
            attempts--;
        }
    }

    // If the player runs out of attempts, display a message
    if (attempts === 0) {
        alert(`Sorry, you've run out of attempts. The correct number was ${randomNumber}.`);
    }

    // Ask the user if they want to play again
    const playAgain = confirm("Do you want to play again?");
    if (playAgain) {
        startGame(); // Restart the game
    }
}

// Start the game
startGame();

 