let score1 = 0;
let score2 = 0;
for (var i = 0; i < 5; i++) {

    let player = prompt("rock , paper scissor ?");


    let ans = ('rock', 'paper', 'scissor');

    let choice = Math.floor(Math.random() * Array.length);
    let computer = ans[choice];

    if (ans == player) {

    } else if ((computer == 'rock' && player == 'scissors') ||
        (computer == 'paper' && player == 'rock') ||
        (computer == 'scissors' && player == 'paper')) {
        score2++;
    } else {
        score1++;
    }

}
if (score1 > score2) { console.log("Player Wins") }
else if (score2 > score1) { console.log("computer wins") }
else { console.log("It's a Tie") }