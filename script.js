const matchPlayer1 = [];
const matchPlayer2 = [];
let barDisplay = 0;
let scoreX = 0;
let scoreO = 0;

function generateGame() {
    const gameBoard = document.getElementById("root");
    gameBoard.replaceChildren();
    for (let i = 0; i < 9; ++i) {
        matchPlayer1[i] = 0;
        matchPlayer2[i] = 0;
    }
    barDisplay = 0;
    document.getElementById("bar").style.width = barDisplay + "%";
    document.getElementById("resetScore").style.display = "inline";
    document.getElementById("messageTop").innerHTML = "X is first! Choose wisely!";
    for (let i = 1; i < 10; ++i) {
        const button = document.createElement("button");
        button.classList = "btn btn-outline-dark my-1 mx-1 w-25 h-25 d-inline-block";
        button.onclick = function () { drawX(this.id); };
        button.id = i;
        gameBoard.appendChild(button);
    }
    document.getElementById("resetB").onclick = function() { reset(); };
    document.getElementById("resetB").innerHTML = "Next match";
}

function drawX(id) {
    let square = document.getElementById(id);
    ++matchPlayer1[id - 1];
    for (let i = 1; i < 10; ++i) {
        document.getElementById(i).onclick = function() { drawO(this.id); };
    }
    square.disabled = true;
    square.classList.add("border-0");
    const image = document.createElement("img");
    image.src = "X.jpg";
    image.className = "img-thumbnail border-0";
    square.appendChild(image);
    display("O");
    checkWinner(matchPlayer1, "X");
    --countDraw;
}

function drawO(id) {
    let square = document.getElementById(id);
    ++matchPlayer2[id - 1];
    for (let i = 1; i < 10; ++i) {
        document.getElementById(i).onclick = function() { drawX(this.id); };
    }
    square.disabled = true;
    square.classList.add("rounded-circle");
    display("X");
    checkWinner(matchPlayer2, "O");
    --countDraw;
}

function checkWinner(matchPlayer, player) {
    let win = 0;
    for (let i = 0; i < 10; ++i) {
        if (matchPlayer[0] != 0 && matchPlayer[1] != 0 && matchPlayer[2] != 0 ||
            matchPlayer[0] != 0 && matchPlayer[4] != 0 && matchPlayer[8] != 0 ||
            matchPlayer[0] != 0 && matchPlayer[3] != 0 && matchPlayer[6] != 0 ||
            matchPlayer[1] != 0 && matchPlayer[4] != 0 && matchPlayer[7] != 0 ||
            matchPlayer[2] != 0 && matchPlayer[5] != 0 && matchPlayer[8] != 0 ||
            matchPlayer[2] != 0 && matchPlayer[4] != 0 && matchPlayer[6] != 0 ||
            matchPlayer[3] != 0 && matchPlayer[4] != 0 && matchPlayer[5] != 0 ||
            matchPlayer[6] != 0 && matchPlayer[7] != 0 && matchPlayer[8] != 0) {
            win = 1;
            for (let i = 1; i < 10; ++i) {
                document.getElementById(i).disabled = true;
            }
        }
    }
    if (win) {
        if (player === "O") {
            ++scoreO;
            document.getElementById("OScore").innerHTML = scoreO;
        } else {
            ++scoreX;
            document.getElementById("XScore").innerHTML = scoreX;
        }
        document.getElementById("messageTop").innerHTML = player + " won!";
        document.getElementById("bar").style.width = "100%";
    } else if (barDisplay == 100) {
        document.getElementById("messageTop").innerHTML = "It's a draw!";
    }
}

function display(player) {
    barDisplay += 12;
    if (barDisplay > 100) {
        barDisplay = 100;
    }
    document.getElementById("messageTop").innerHTML = "Is " + player + " turn.";
    document.getElementById("bar").style.width = barDisplay + "%";
}

function reset() {
    generateGame();
    for (let i = 1; i < 10; ++i) {
        document.getElementById(i).onclick = function() { drawO(this.id); };
        document.getElementById(i).replaceChildren();
        document.getElementById(i).disabled = false;
        document.getElementById(i).className = "btn btn-outline-dark my-1 mx-1 w-25 h-25 d-inline-block";
    }
    document.getElementById("messageTop").innerHTML = "This time O is first! Good luck!";
    const button = document.getElementById("resetB");
    button.onclick = function() { generateGame(); };
}

function resetScore() {
    reset();
    scoreX = 0;
    scoreO = 0;
    document.getElementById("messageTop").innerHTML = "The score was reset! O is first. Choose wisely!";
    document.getElementById("OScore").innerHTML = scoreO;
    document.getElementById("XScore").innerHTML = scoreX;
}
