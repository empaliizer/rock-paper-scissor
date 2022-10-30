const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const scoreElement = document.querySelector('.points');
const images = document.querySelector('.img');
const win = document.querySelector('.win');
const resultCont = document.querySelector('.win-cont h2');
const againBtn = document.querySelector('.again');
const playerOption = [rockBtn, paperBtn, scissorsBtn];
const computerOption = ['rock', 'paper', 'scissors'];

let userScore = 0;
let computerScore = 0;
let rounds = 0;

win.classList.add('hidden');

const playGame = (userChoice) => {
    console.log(userChoice);
    const rndNumb = Math.round(Math.random()* 2);
    console.log(computerOption[rndNumb]);
    const computerChoice = computerOption[rndNumb];
    let whoWins = 'none';

    if(userChoice == computerChoice){
        console.log('lika')
    } else if(userChoice == 'paper') {
        if(computerChoice == 'rock'){
            console.log('Användaren vinner');
            userScore++;
            whoWins = 'user';
        } else {
            console.log('Datorn vinner');
            computerScore++;
            whoWins = 'computer';
        }
    } else if(userChoice == 'rock'){
        if(computerChoice == 'scissors') {
            console.log('Användaren vinner')
            userScore++;
            whoWins = 'user';
        } else {
            console.log('datorn vinner')
            computerScore++;
            whoWins = 'computer'
        }
    } else {
        if(computerChoice == 'paper'){
            console.log('användaren vinner')
            userScore++;
            whoWins = 'user';
        } else {
            console.log('datorn vinner')
            computerScore++;
            whoWins = 'computer'
        }
    }

    images.classList.add('hidden');
    win.classList.remove('hidden');
    rounds++;
    console.log(userScore)
    console.log(computerScore)
    console.log(rounds)

    scoreElement.innerHTML = userScore;
    document.querySelector(`.user-choice .win-${userChoice}`).style.display = 'flex';
    document.querySelector(`.computer-choice .win-${computerChoice}`).style.display = 'flex';
    if(whoWins == 'user'){
        resultCont.innerHTML = 'YOU WIN!';
    } else if(whoWins == 'computer') {
        resultCont.innerHTML = 'YOU LOSE!'
    } else {
        resultCont.innerHTML = 'TIE!'

    }

}

for(let option of playerOption){
    option.addEventListener('click', function(e){
        const userSelect = e.currentTarget.getAttribute('data-choice');
        playGame(userSelect);
    })
}

againBtn.addEventListener('click', function(){
    images.classList.remove('hidden');
    win.classList.add('hidden');
    document.querySelector(`.user-choice .win-rock`).style.display = 'none';
    document.querySelector(`.user-choice .win-paper`).style.display = 'none';
    document.querySelector(`.user-choice .win-scissors`).style.display = 'none';
    document.querySelector(`.computer-choice .win-rock`).style.display = 'none';
    document.querySelector(`.computer-choice .win-paper`).style.display = 'none';
    document.querySelector(`.computer-choice .win-scissors`).style.display = 'none';
});

const modal = document.querySelector(".modal");

//För att välja alla .trigger
const ruleBtn = document.querySelectorAll(".rule-btn");
const closeBtn = document.querySelector(".close-btn");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

//For loop för att alla trigger element ska få addEventListerner annars syns bara första trigger
for(let el of ruleBtn) {
el.addEventListener("click", toggleModal);
}

closeBtn.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);