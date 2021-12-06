var possib = ["Rock", "Scissors", "Paper"];

var computer = possib[Math.floor(Math.random() * possib.length)];
var user = possib[Math.floor(Math.random() * possib.length)];
console.log("Computers choice: " + computer)
console.log("Users choice: " + user);


/* rock -scissors = rock win
scissors - paper = scissors win
paper - rock = paper win */

function play(computer, user) {
    var currentMatch = `${computer} vs ${user}`;

    if (computer === user) {
        console.log(`${currentMatch} is a tie`);
        return;
    } else if (computer == "Rock" && user == "Scissors" || computer == "Scissors" && user == "Rock") {
        return console.log("Rock wins!");
    } else if (computer == 'Scissors' && user == "Paper" || computer == 'Paper' && user == "Scissors") {
        return console.log("Scissors wins!");
    } else if (computer == "Paper" && user == "Rock" || computer == "Rock" && user == "Paper") {
        return console.log("Paper wins!");
    };
}
play(computer, user)