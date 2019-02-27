let winner = null;

//functions here
function startGame(){
    winner = null;
    for(i=0; i<9; i++){
        clear(i)
    }
    document.turn ="O"
    displayMsg(document.turn+"'s get to start first")
}

function nextMove(cell){
    if(winner != null){
        displayMsg("Game has ended lah")
        winner = document.turn;
    }else if(cell.innerText == ""){
        cell.innerText = document.turn;
        switchTurn()
    } else {
        displayMsg("This spot has been taken la")
    }
}

function switchTurn(){
    if(checkWin(document.turn)){
        displayMsg(document.turn+"'s have won")
        winner = document.turn;
    }else if(checkTie()) {
        displayMsg("It's a tie,Play again")
    }else if(document.turn == "O"){
        displayMsg("X's Turn")
        document.turn = "X"
    }else {
        displayMsg("O's Turn")
        document.turn = "O"
    }
}

function displayMsg(message){
    document.getElementById("msg").innerText = message
}

function clear(num){
    document.getElementById(num).innerText = ""
}

function checkWin(move){
    result = false;
    if( checkRow(0,1,2,move) ||
        checkRow(3,4,5,move) ||
        checkRow(6,7,8,move) ||
        checkRow(0,3,6,move) ||
        checkRow(1,4,7,move) ||
        checkRow(2,5,8,move) ||
        checkRow(0,4,8,move) ||
        checkRow(2,4,6,move) 
    ){
        result = true;
    }return result;
}
function getBoxId(num){
    return document.getElementById(num).innerText;
}
function checkRow(a,b,c,move){
    result = false;
    if(getBoxId(a) == move && getBoxId(b) == move && getBoxId(c) == move){
        result = true;
    } 
    return result;
}

function checkTie(){
    for(i=0; i<9; i++){
        if(getBoxId(i)==""){
            return false;
        }
    }
    return true;
}


//game start call here
startGame()
