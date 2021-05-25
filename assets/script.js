const player1 = {
    score: 0,
    button: document.querySelector("#player1"),
    display: document.querySelector("#p1Display"),
    id: 1
}
const player2 = {
    score: 0,
    button: document.querySelector("#player2"),
    display: document.querySelector("#p2Display"),
    id: 2
}

const WinnigScoreOption = document.querySelector("#winningScore");
const winner = document.querySelector("#winner");
let winningScore = 11;
let isGameOver = false;
const resetBtn = document.querySelector("#reset");

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        player.display.textContent = player.score;
        if (player.score + 1 == winningScore && opponent.score + 1 === winningScore) {
            winningScore += 1;
            winner.textContent = `Tie Break Now Game is of ${winningScore} points🏓`;

        }
        if (player.score === winningScore) {
            winner.textContent = `Player ${player.id} Won the Game 🥳`;
            isGameOver = true;
            player.button.disabled = true;
            opponent.button.disabled = true;
            player.display.classList.add("has-text-success");
            opponent.display.classList.add("has-text-danger");
        }
    }
}

function reset() {
    winner.textContent = ``;
    isGameOver = false;
    for (let p of[player1, player2]) {
        p.display.textContent = 0;
        p.score = 0;
        p.button.disabled = false;
        p.display.classList.remove("has-text-success", "has-text-danger");
    }

}

WinnigScoreOption.addEventListener("change", function() {
    winningScore = parseInt(this.value);
    reset(player1, player2);
});

player1.button.addEventListener("click", function() {
    updateScore(player1, player2);
});

player2.button.addEventListener("click", function() {
    updateScore(player2, player1);
});

resetBtn.addEventListener("click", reset);