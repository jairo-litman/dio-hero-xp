function getWinsLoses() {
    while (true) {
        const wins = parseInt(prompt("Insira sua quantidade de vitórias: "), 10);
        const loses = parseInt(prompt("Insira sua quantidade de derrotas: "), 10);
        if (!isNaN(wins) && !isNaN(loses)) {
            return { wins, loses };
        }
        alert("Vitórias e derrotas inválidas, utilize números.");
    }
}

function determineRank(wins, loses) {
    const winRate = wins - loses;

    if (winRate <= 10) {
        return "Ferro";
    } else if (winRate <= 20) {
        return "Bronze";
    } else if (winRate <= 50) {
        return "Prata";
    } else if (winRate <= 80) {
        return "Ouro";
    } else if (winRate <= 90) {
        return "Diamante";
    } else if (winRate <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

const { wins, loses } = getWinsLoses();
const rank = determineRank(wins, loses);
const winRate = wins - loses;


console.log(`O Herói tem de saldo de ${winRate} está no nível de ${rank}`);
