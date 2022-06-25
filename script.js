
const matchPlayer1 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
const matchPlayer2 = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function generateGame() {
    const gameBoard = document.getElementById("root");
    for (let i = 1; i < 10; ++i) {
        const button = document.createElement("button");
        button.classList = "btn btn-outline-dark my-1 mx-1 w-25 h-25 d-inline-block";
        button.onclick = function () { drawX(this.id); };
        button.id = i;
        gameBoard.appendChild(button);
    }
}

function drawX(id) {
    ++matchPlayer1[id - 1];
    for (let i = 1; i < 10; ++i) {
        document.getElementById(i).onclick = function() { drawO(this.id); };
    }
    document.getElementById(id).disabled = true;
    const image = document.getElementById(id).createElement("img");
    image.src = "x.png";
    document.getElementById(id).appendChild(image);
    checkWinner(matchPlayer1, "Player 1");
}

function drawO(id) {
    ++matchPlayer2[id - 1];
    for (let i = 1; i < 10; ++i) {
        document.getElementById(i).onclick = function() { drawX(this.id); };
    }
    document.getElementById(id).disabled = true;
    document.getElementById(id).classList.add("rounded-circle");
    checkWinner(matchPlayer2, "Player 2");
}

function checkWinner(matchPlayer, name) {
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
        alert("Winner is " + name + "!");
    }
}
