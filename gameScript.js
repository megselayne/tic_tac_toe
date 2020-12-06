//DOM variable declarations
const board = document.querySelector('#board');
const newGameButton = document.querySelector('#new-game');
const subHeader = document.querySelector('#subheader');

//Game Variables
let winner = false;
let playerTurn = 'x';
let plays = 0;
const xBoard = [];
const oBoard = [];
const winningBoards = [
    ['0','1','2'],
    ['3','4','5'],
    ['6','7','8'],
    ['0','3','6'],
    ['1','4','7'],
    ['2','5','8'],
    ['0','4','8'],
    ['2','4','6']
]

const checkForWin = (playerBoard, nextTurn) => {
    winningBoards.forEach(winSequence =>{
        if(winSequence.every(el => playerBoard.includes(el))){
            winner = true;
        }
    })
    if(winner){
        subHeader.innerHTML = `${playerTurn.toUpperCase()} Wins!`
        document.querySelectorAll('.square').forEach(square => {
            square.removeEventListener('click', showMove)
        })
    }
    else if(plays === 9){
        subHeader.innerHTML = `It's a Draw!`
    }
    else{
        playerTurn = nextTurn;
        whoseTurn();    
    }
}

const showMove = (e) => {
    if(playerTurn === 'x'){
        e.target.innerHTML = 'X';
        xBoard.push(e.target.getAttribute('id'));
        e.target.removeEventListener('click', showMove);
        plays ++;
        checkForWin(xBoard, 'o');
    }
    else{
        e.target.innerHTML = 'O';
        oBoard.push(e.target.getAttribute('id'));
        e.target.removeEventListener('click', showMove);
        plays ++;
        checkForWin(oBoard, 'x');
    }
    
}

whoseTurn = () => {
    subHeader.innerHTML = `It's ${playerTurn.toUpperCase()}'s Turn`
}


const resetGame = () => {
    //could be window refresh or reset of main functions
    location.reload()
}

//event listeners
for(let i =0; i< 9; i++){
    const square = document.createElement('div');
    square.setAttribute('id', i);
    square.classList.add('square');
    board.appendChild(square);
    square.addEventListener('click', showMove);

}
newGameButton.addEventListener('click', resetGame);

//kickstart game
whoseTurn();

//Check script is connected to HTML
console.log(`connected!`);

module.exports = {
    checkForWin
}