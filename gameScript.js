//variable declarations
const board = document.querySelector('#board');









//event listeners
for(let i =0; i< 9; i++){
    const square = document.createElement('div');
    square.setAttribute('id', i);
    square.classList.add('square');
    board.appendChild(square);
    // square.addEventListener('click', somethingHere);

}

console.log(`connected!`);