// 1. VARIABLES
let playerName = "John";        // String variable
let playerAge = 25;             // Number variable
let playerScore = 0;            // Score variable
let isGameOver = false;         // Boolean variable

playerAge = 26;
isGameOver = true;

// Create an array with 5 items
let items = ["Apple", "Banana", "Pear", "Blueberry", "Lemon"];

// Display the second and third items
console.log("Second Item:", items[1]); 
console.log("Third Item:", items[2]);  

// 2. FUNCTIONS
// Function to increase the player's score by 1
function addScore() {
    playerScore += 1;
}

// Function to display the player's current score
function displayScore() {
    console.log("Player Score:", playerScore);
}

// 3. CONDITIONS
// Function to check if the score is odd or even
function checkScore() {
    if (playerScore % 2 === 0) {
        console.log("The score is EVEN. Keep it up!");
    } else {
        console.log("The score is ODD. You're doing great!");
    }
}

// CALLING THE FUNCTIONS
addScore(); 
displayScore(); 
checkScore();  // Check if the score is odd or even

addScore();        // Increases the score again
displayScore();    // Displays the updated score
checkScore();      // Check again
