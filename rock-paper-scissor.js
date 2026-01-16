
let score = JSON.parse(localStorage.getItem('score')) || {
    Win: 0,
    Lose: 0,
    Tie: 0
}
updateScore();

let resultOnPage=document.querySelector('#result-onPage');


function playGame(myMove) {
    let result;
    let computerMove = PickcomputerMove();
    
    if (myMove === 'Rock') {
        if (computerMove === 'Rock') {
            result = 'Tie'
        }
        else if (computerMove === 'Scissors') {
            result = 'Win'
        }
        else {
            result = 'Lose'
        }
    }

    else if (myMove === 'Scissors') {
        if (computerMove === 'Rock') {
            result = 'Lose'
        }
        else if (computerMove === 'Scissors') {
            result = 'Tie'
        }
        else {
            result = 'Win'
        }
    }

    else {
        if (computerMove === 'Rock') {
            result = 'Win'
        }
        else if (computerMove === 'Scissors') {
            result = 'Lose'
        }
        else {
            result = 'Tie'
        }
    }
    getScore(result);
     below.innerHTML=`<div class='small-box'><h5> Your move : </h5><img class='small-image' src="img/${myMove}.jpg"><br><br><img class='small-image' src="img/${computerMove}.jpg"> <h5>: Computer Move</h5> <div>`;

    resultOnPage.innerText=`${result}\n`;

    document.querySelector('#score').innerText=`Win - ${score.Win}\nLose - ${score.Lose}\nTie - ${score.Tie}`;

    localStorage.setItem('score', (JSON.stringify(score)));
}

function PickcomputerMove() {
    let computerMove;

    let randNum = Math.random();
    if (randNum >= 0 && randNum < 1 / 3) {
        computerMove = 'Rock';
    }
    else if (randNum >= 1 / 3 && randNum < 2 / 3) {
        computerMove = 'Paper';
    }
    else {
        computerMove = 'Scissors';
    }

    return computerMove;

}

function getScore(result) {

    if (result === 'Win') {
        score.Win++;
    }

    else if (result === 'Lose') {
        score.Lose++;
    }

    else {
        score.Tie++;
    }


}

function updateScore()
{
    document.querySelector('#score').innerText=`Win - ${score.Win}\nLose - ${score.Lose}\nTie - ${score.Tie}`;
}

