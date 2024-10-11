function determineLevel(xp) {
    if (xp <= 1000) {
        return "Ferro";
    } else if (xp <= 2000) {
        return "Bronze";
    } else if (xp <= 5000) {
        return "Prata";
    } else if (xp <= 7000) {
        return "Ouro";
    } else if (xp <= 8000) {
        return "Platina";
    } else if (xp <= 9000) {
        return "Ascendente";
    } else if (xp <= 10000) {
        return "Imortal";
    } else {
        return "Radiante";
    }
}

function getHeroName() {
    while (true) {
        const name = prompt("Insira seu nome: ");
        if (name) {
            return name;
        }
        alert("Nome inválido, utilize caracteres alfabéticos.");
    }
}

function getHeroXP() {
    while (true) {
        const xp = parseInt(prompt("Insira sua quantidade de experiência: "), 10);
        if (!isNaN(xp)) {
            return xp;
        }
        alert("XP inválida, utilize números.");
    }
}

const heroName = getHeroName();
const heroXP = getHeroXP();
const heroLevel = determineLevel(heroXP);

console.log(`O Herói de nome ${heroName} está no nível de ${heroLevel}`);
