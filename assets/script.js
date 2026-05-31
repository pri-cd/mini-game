/**
 * 1. Ask user for their input 1, 2, 3 (rock, paper or scissors)
 * 2. Map the number to the respective choice.
 * 3. Make computer choose any random choice.
 * 4. Compare and make one win. 
 * 
 */

const humanScore = 0;
const machineScore = 0;

let getComputerChoice = () => {
    const numChoice = Math.floor(Math.random() * 3);
    let choice = "";

    const choiceObject = {
        0: "rock",
        1: "paper",
        2: "scissors"
    };


    choice = choiceObject[numChoice];
    console.log("Choice(Machine): " + choice);
    return choice;
};


let getHumanChoice = () => {
    /* Temporary error Handling */
    const choice = parseInt(prompt("Enter (Rock, Paper, Scissors):")) || "rock";
    console.log("Choice(Human): " + choice);
    return choice;
};


let playRound = (humanChoice, MachineChoice) => {
    humanChoice.toLowerCase();
}; 
