class Morpion {

    constructor(gridElement) {
        this.gridElement = gridElement;
        this.initialize();
    }

    initialize() {

        const player = document.getElementById("currentPlayer");
        const player1 = document.getElementById("playerOne");
        const player2 = document.getElementById("playerTwo");


        player1.innerHTML = 0;
        player2.innerHTML = 0;
        player.innerHTML = "Joueur 1";


        const cells = this.gridElement.querySelectorAll(".cell");
        cells.forEach(cell => {
            cell.addEventListener("click", () => {
                console.log(cell);
                if (player.innerHTML === "Joueur 1") {
                    if (cell.innerHTML === "X" || cell.innerHTML === "O") {
                        alert("choisissez une autre case")
                    } else {
                        cell.innerHTML = "X";
                    }
                    player.innerHTML = "Joueur 2"
                } else if (player.innerHTML === "Joueur 2") {
                    if (cell.innerHTML === "X" || cell.innerHTML === "O") {
                        alert("choisissez une autre case")
                    } else {
                        cell.innerHTML = "O";
                    }
                    player.innerHTML = "Joueur 1"
                }
                let winner = this.checkWinner();
                if (winner) {
                    alert(`Joueur ${winner === "X" ? "1" : "2"} a gagné !`);
                    if ((winner === "X" ? "1" : "2") === "1") {
                        player1.innerHTML++;
                    } else {
                        player2.innerHTML++;
                    }
                    player.innerHTML = "Joueur 1"
                    cells.forEach(cell => {
                        cell.innerHTML = "";
                    });

                }
            });
        });



        document.getElementById("replay").addEventListener("click", () => {
            player.innerHTML = "Joueur 1"
            cells.forEach(cell => {
                cell.innerHTML = "";
            });
        })
    }

    checkWinner() {
        const cells = this.gridElement.querySelectorAll(".cell");
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let line of lines) {
            const [a, b, c] = line;
            if (cells[a].innerHTML && cells[a].innerHTML === cells[b].innerHTML && cells[a].innerHTML === cells[c].innerHTML) {
                return cells[a].innerHTML;
            }
        }
        return null;
    }
}

export { Morpion };