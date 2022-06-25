
const matchPlayer1 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
const matchPlayer2 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let barDisplay = 0;

function generateGame() {
    const gameBoard = document.getElementById("root");
    document.getElementById("messageTop").innerHTML = "X is first! Click to start..."
    for (let i = 1; i < 10; ++i) {
        const button = document.createElement("button");
        button.classList = "btn btn-outline-dark my-1 mx-1 w-25 h-25 d-inline-block";
        button.onclick = function () { drawX(this.id); };
        button.id = i;
        gameBoard.appendChild(button);
    }
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
    image.src = "x.jpg";
    image.className = "img-thumbnail border-0";
    square.appendChild(image);
    display("O");
    checkWinner(matchPlayer1, "X");
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
        document.getElementById("messageTop").innerHTML = player + " won!";
        document.getElementById("bar").style.width = "100%";
    }
}

function display(letter) {
    barDisplay += 12;
    if (barDisplay > 100) {
        barDisplay = 100;
    }
    document.getElementById("messageTop").innerHTML = "Is " + letter + " turn.";
    document.getElementById("bar").style.width = barDisplay + "%";
}
