//function called when players begin game
function playGame() {
    //setting DOM to all input fields
    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;

    //checking if player X wins or not then disabling input fields
    if ((b1 == 'X') && (b2 == 'X') && (b3 == 'X')) {
        document.getElementById("player").innerHTML = "Player X Wins";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert("PLAYER X HAS WON THE GAME");
    } else if ((b4 == 'X') && (b5 == 'X') && (b6 == 'X')) {
        document.getElementById("player").innerHTML = "Player X Wins";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert("PLAYER X HAS WON THE GAME");
    } else if ((b7 == 'X') && (b8 == 'X') && (b9 == 'X')) {
        document.getElementById("player").innerHTML = "Player X Wins";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        window.alert("PLAYER X HAS WON THE GAME");
    } else if ((b1 == 'X') && (b4 == 'X') && (b7 == 'X')) {
        document.getElementById("player").innerHTML = "Player X Wins";
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert("PLAYER X HAS WON THE GAME");
    } else if ((b2 == 'X') && (b5 == 'X') && (b8 == 'X')) {
        document.getElementById("player").innerHTML = "Player X Wins";
        document.getElementById("b4").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert("PLAYER X HAS WON THE GAME");
    } else if ((b3 == 'X') && (b6 == 'X') && (b9 == 'X')) {
        document.getElementById("player").innerHTML = "Player X Wins";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b1").disabled = true;
        window.alert("PLAYER X HAS WON THE GAME");
    } else if ((b1 == 'X') && (b5 == 'X') && (b9 == 'X')) {
        document.getElementById("player").innerHTML = "Player X Wins";
        document.getElementById("b4").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b3").disabled = true;
        window.alert("PLAYER X HAS WON THE GAME");
    } else if ((b3 == 'X') && (b5 == 'X') && (b7 == 'X')) {
        document.getElementById("player").innerHTML = "Player X Wins";
        document.getElementById("b4").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert("PLAYER O HAS WON THE GAME");
    }


    //checking if player O wins or not then disabling input fields
    else if ((b1 == '0') && (b2 == 'O') && (b3 == 'O')) {
        document.getElementById("player").innerHTML = "Player O Wins";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert("PLAYER O HAS WON THE GAME");
    } else if ((b4 == 'O') && (b5 == 'O') && (b6 == 'O')) {
        document.getElementById("player").innerHTML = "Player O Wins";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert("PLAYER O HAS WON THE GAME");
    } else if ((b7 == 'O') && (b8 == 'O') && (b9 == 'O')) {
        document.getElementById("player").innerHTML = "Player O Wins";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        window.alert("PLAYER O HAS WON THE GAME");
    } else if ((b1 == 'O') && (b4 == 'O') && (b7 == 'O')) {
        document.getElementById("player").innerHTML = "Player O Wins";
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert("PLAYER O HAS WON THE GAME");
    } else if ((b2 == 'O') && (b5 == 'O') && (b8 == 'O')) {
        document.getElementById("player").innerHTML = "Player O Wins";
        document.getElementById("b4").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert("PLAYER O HAS WON THE GAME");
    } else if ((b3 == 'O') && (b6 == 'O') && (b9 == 'O')) {
        document.getElementById("player").innerHTML = "Player O Wins";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b1").disabled = true;
        window.alert("PLAYER O HAS WON THE GAME");
    } else if ((b1 == 'O') && (b5 == 'O') && (b9 == 'O')) {
        document.getElementById("player").innerHTML = "Player O Wins";
        document.getElementById("b4").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b3").disabled = true;
        window.alert("PLAYER O HAS WON THE GAME");
    } else if ((b3 == 'O') && (b5 == 'O') && (b7 == 'O')) {
        document.getElementById("player").innerHTML = "Player O Wins";
        document.getElementById("b4").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert("PLAYER O HAS WON THE GAME");
    } else if ((b1 == 'X' || b1 == 'O') && (b2 == 'X' || b2 == 'O') && (b3 == 'X' || b3 == 'O') && (b4 == 'X' || b4 == 'O') && (b5 == 'X' || b5 == 'O') && (b6 == 'X' || b6 == 'O') && (b7 == 'X' || b7 == 'O') && (b8 == 'X' || b8 == 'O') && (b9 == 'X' || b9 == 'O')) {
        document.getElementById("player").innerHTML = "Match Tied";
        window.alert('MATCH TIE');
    } else {
        //printing results
        if (turn == 0) {
            document.getElementById("player").innerHTML = "PLAYER X TURN";
        } else {
            document.getElementById("player").innerHTML = "PLAYER O TURN";
        }
    }
}

//checking whose turn it is and puts in X or O
turn = 1;

function playXOI() {
    if (turn == 1) {
        document.getElementById("b1").value = "X";
        document.getElementById("b1").disabled = true;
        turn = 0;
    } else {
        document.getElementById("b1").value = "O";
        document.getElementById("b1").disabled = true;
        turn = 1;
    }
}

function playXOII() {
    if (turn == 1) {
        document.getElementById("b2").value = "X";
        document.getElementById("b2").disabled = true;
        turn = 0;
    } else {
        document.getElementById("b2").value = "O";
        document.getElementById("b2").disabled = true;
        turn = 1;
    }
}

function playXOIII() {
    if (turn == 1) {
        document.getElementById("b3").value = "X";
        document.getElementById("b3").disabled = true;
        turn = 0;
    } else {
        document.getElementById("b3").value = "O";
        document.getElementById("b3").disabled = true;
        turn = 1;
    }
}

function playXOIV() {
    if (turn == 1) {
        document.getElementById("b4").value = "X";
        document.getElementById("b4").disabled = true;
        turn = 0;
    } else {
        document.getElementById("b4").value = "O";
        document.getElementById("b4").disabled = true;
        turn = 1;
    }
}

function playXOV() {
    if (turn == 1) {
        document.getElementById("b5").value = "X";
        document.getElementById("b5").disabled = true;
        turn = 0;
    } else {
        document.getElementById("b5").value = "O";
        document.getElementById("b5").disabled = true;
        turn = 1;
    }
}

function playXOVI() {
    if (turn == 1) {
        document.getElementById("b6").value = "X";
        document.getElementById("b6").disabled = true;
        turn = 0;
    } else {
        document.getElementById("b6").value = "O";
        document.getElementById("b6").disabled = true;
        turn = 1;
    }
}

function playXOVII() {
    if (turn == 1) {
        document.getElementById("b7").value = "X";
        document.getElementById("b7").disabled = true;
        turn = 0;
    } else {
        document.getElementById("b7").value = "O";
        document.getElementById("b7").disabled = true;
        turn = 1;
    }
}

function playXOVIII() {
    if (turn == 1) {
        document.getElementById("b8").value = "X";
        document.getElementById("b8").disabled = true;
        turn = 0;
    } else {
        document.getElementById("b8").value = "O";
        document.getElementById("b8").disabled = true;
        turn = 1;
    }
}

function playXOIX() {
    if (turn == 1) {
        document.getElementById("b9").value = "X";
        document.getElementById("b9").disabled = true;
        turn = 0;
    } else {
        document.getElementById("b9").value = "O";
        document.getElementById("b9").disabled = true;
        turn = 1;
    }
}

//reset game
function resetGame() {
    location.reload();
    document.getElementById("b1").value = '';
    document.getElementById("b2").value = '';
    document.getElementById("b3").value = '';
    document.getElementById("b4").value = '';
    document.getElementById("b5").value = '';
    document.getElementById("b6").value = '';
    document.getElementById("b7").value = '';
    document.getElementById("b8").value = '';
    document.getElementById("b9").value = '';
}