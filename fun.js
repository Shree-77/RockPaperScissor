let s1 = 0, s2 = 0;
const content = document.querySelector('.outputbox');
const output = document.createElement('p');
output.style.fontSize = '30px';
const score1 = document.querySelector('#score1');
const score2 = document.querySelector('#score2');
const buttons = document.querySelectorAll('button');



function playRound(playerselection) {
    if (s1 >= 5 || s2 >= 5) {
        s1 = 0; s2 = 0;
    }
    let player = playerselection;
    let choice = ['rock', 'paper', 'scissors'];
    let ans = Math.floor(Math.random() * choice.length);
    let computer = choice[ans];
    output.textContent = "P: " + player + ", C : " + computer;
    if (player == computer) {

    } else if ((player == 'rock' && computer == 'scissors')
        || (player == 'paper' && computer == 'rock') ||
        (player == 'rock' && computer == 'scissors')) {
        s1++; score1.textContent = s1;

    } else {
        s2++; score2.textContent = s2;
    }
    if (s1 >= 5) {
        output.textContent = 'Player1 wins';
        score1.textContent = 0;
        s1, s2 = 0;
    } else if (s2 >= 5) {
        output.textContent = 'computer wins';
        score2.textContent = 0;
        score1.textContent = 0;
    }
}
for (const btn of buttons) {
    btn.addEventListener('click', function (e) {
        const playerselection = e.target.id;
        console.log(playerselection);
        playRound(playerselection);
    });
}
content.appendChild(output);