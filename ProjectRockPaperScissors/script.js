const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');
const result = document.querySelector('.result');
var playerOne = document.getElementById('playerOne');
var playerTwo = document.getElementById('playerTwo');
const values = ['rock' , 'paper' , 'scissor'];

console.log(values);
function getRandom(){
    return Math.floor(Math.random()*3);
}
rock.addEventListener('click' , (e)=>{
    e.preventDefault();
    playerOne.src = "./images/rock.png"
    const computer = values[getRandom()];
    console.log(computer);
    
    if(computer=='rock'){
        playerTwo.src = "./images/rock.png";
        result.innerHTML="Game is Tied";
    }
    else if(computer=='paper'){
        playerTwo.src = "./images/paper.png";
        result.innerHTML="You Lose";
    }
    else {
        playerTwo.src = "./images/scissors.png";
        result.innerHTML="You Win";
    }
});
paper.addEventListener('click' , (e)=>{
    e.preventDefault();
    playerOne.src = "./images/paper.png"
    const computer = values[getRandom()];
    console.log(computer);
    
    if(computer=='paper'){
        playerTwo.src = "./images/paper.png";
        result.innerHTML="Game is Tied";
    }
    else if(computer=='scissor'){
        playerTwo.src = "./images/scissors.png";
        result.innerHTML="You Lose";
    }
    else {
        playerTwo.src = "./images/rock.png";
        result.innerHTML="You Win";
    }
});
scissor.addEventListener('click' , (e)=>{
    e.preventDefault();
    playerOne.src = "./images/scissors.png"
    const computer = values[getRandom()];
    console.log(computer);
    
    if(computer=='scissor'){
        playerTwo.src = "./images/scissors.png";
        result.innerHTML="Game is Tied";
    }
    else if(computer=='rock'){
        playerTwo.src = "./images/rock.png";
        result.innerHTML="You Lose";
    }
    else {
        playerTwo.src = "./images/paper.png";
        result.innerHTML="You Win";
    }
});
