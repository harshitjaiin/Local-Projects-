const reset = document.getElementById('reset');

const result = document.querySelector('.result');
const turn = document.querySelector('.turn');
const allboxes = document.querySelectorAll('.box');
const player1 = 'X';
const player2 = 'O';
let playerOneTurn = true;

function checkTicTacToeStatus(board) {
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== '.') {
            return board[i][0];
        }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
        if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== '.') {
            return board[0][i];
        }
    }

    // Check diagonals
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== '.') {
        return board[0][0];
    }
    if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== '.') {
        return board[0][2];
    }

    // Check for a tie
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === '.') {
                return null; // Game still ongoing
            }
        }
    }

    return 'T'; // It's a tie
}

allboxes.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target;
    
        // Check if the box is already filled
        if (target.innerHTML==='.') {
            // Set the inner HTML based on the current player's turn
            target.innerHTML = playerOneTurn ? 'X' : 'O';

            // Create the board array
            let board = [];
            let row = [];

            allboxes.forEach((box, index) => {
                row.push(box.innerHTML);
                if ((index + 1) % 3 === 0) {
                    board.push([...row]);
                    row = [];
                }
            });

            // Check the game status
            const res = checkTicTacToeStatus(board);

            // Display the result
            if (res !== null) {
                if (res === 'T') {
                    alert('Game is Tied');
                } else {
                    result.innerHTML=`Game over and ${playerOneTurn? 'Player One' : 'Player Two'} won`;
                    EndKardo();
                }
            }

            // Switch turns
            if(playerOneTurn){
               turn.innerHTML=`Player Two's Turn`;
            }
            else{
                turn.innerHTML=`Player One's Turn`;
            }
            playerOneTurn = !playerOneTurn;
        }
    });
});

function EndKardo(){
    console.log(allboxes);
    allboxes.forEach( (val)=>{
        val.innerHTML=".";
    })
    turn.innerHTML=`Player One's Turn`;

}

reset.addEventListener('click' , ()=>{
    console.log(allboxes);
    allboxes.forEach( (val)=>{
        val.innerHTML=".";
    })
    turn.innerHTML=`Player One's Turn`;
    result.innerHTML="";
})
