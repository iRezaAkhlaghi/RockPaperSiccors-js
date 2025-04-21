// Define variables for game status
let computerChoice = "";
let playerChoice = "";
let playerWinsCount = 0;
let computerWinsCount = 0;

// Add event listener for player's choice
document.querySelector(".game").addEventListener("click", (event) => {
    // Get the player's choice from the clicked element
    playerChoice = event.target.className;

    // Generate a random choice for the computer
    const computerChoices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * computerChoices.length);
    computerChoice = computerChoices[randomIndex];

    // Display the computer's choice
    document.querySelector("#cmpMove").innerText = `Computer chose: ${computerChoice}`;

    // Call the function to determine the result of the game
    determineResult(playerChoice, computerChoice);
});

// Function to determine the result of the game
function determineResult(player, computer) {
    const resultElement = document.querySelector("#result");
    const myWinsElement = document.querySelector(".me");
    const cmpWinsElement = document.querySelector(".cmp");

    if (player === computer) {
        resultElement.innerText = "YOU BOTH CHOSE THE SAME";
    } else if (
        (player === "Rock" && computer === "Paper") ||
        (player === "Scissors" && computer === "Rock") ||
        (player === "Paper" && computer === "Scissors")
    ) {
        resultElement.innerText = "YOU LOSE THIS TIME";
        computerWinsCount++;
        cmpWinsElement.children[0].innerText = computerWinsCount;
    } else {
        resultElement.innerText = "YOU WIN THIS TIME";
        playerWinsCount++;
        myWinsElement.children[0].innerText = playerWinsCount;
    }
}
